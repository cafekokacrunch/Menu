(function () {
  const $ = (s) => document.querySelector(s);
  const money = (n) => SETTINGS.currency + n.toLocaleString("en-IN");
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  // Flatten menu with ids
  const items = {};
  MENU.forEach((cat) =>
    cat.items.forEach((it) => {
      it.id = slug(cat.category + "-" + it.name);
      it.category = cat.category;
      items[it.id] = it;
    })
  );

  // ---------- State ----------
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem("kc-cart") || "{}"); } catch (e) {}
  Object.keys(cart).forEach((id) => { if (!items[id]) delete cart[id]; });
  let filter = "all";
  let query = "";
  let location = null; // {lat, lng, acc}

  const save = () => { try { localStorage.setItem("kc-cart", JSON.stringify(cart)); } catch (e) {} };
  const count = () => Object.values(cart).reduce((a, b) => a + b, 0);
  const total = () => Object.entries(cart).reduce((s, [id, q]) => s + items[id].price * q, 0);

  // ---------- Header ----------
  document.title = SETTINGS.cafeName + " · Order Online";
  $("#cafe-name").textContent = SETTINGS.cafeName;
  $("#tagline").textContent = SETTINGS.tagline;
  $("#delivery-note").textContent = SETTINGS.deliveryNote;
  $("#upi-text").textContent = SETTINGS.upiNote;

  // ---------- Menu rendering ----------
  function controlHTML(id) {
    const q = cart[id] || 0;
    if (!q) return `<button class="add-btn" data-add="${id}">ADD</button>`;
    return `<div class="qty"><button data-dec="${id}" aria-label="Remove one">−</button><span>${q}</span><button data-inc="${id}" aria-label="Add one">+</button></div>`;
  }

  function renderMenu() {
    const q = query.trim().toLowerCase();
    let html = "";
    let nav = "";
    MENU.forEach((cat) => {
      const list = cat.items.filter(
        (it) =>
          (filter === "all" || it.type === filter) &&
          (!q || it.name.toLowerCase().includes(q) || (it.desc || "").toLowerCase().includes(q))
      );
      if (!list.length) return;
      const cid = slug(cat.category);
      nav += `<a href="#${cid}" data-cat="${cid}">${cat.category}</a>`;
      html += `<section class="category" id="${cid}"><h2>${cat.category}</h2><div class="items">`;
      list.forEach((it) => {
        html += `<article class="item">
          <div class="item-info">
            <div class="item-name"><span class="dot ${it.type}" title="${it.type === "veg" ? "Veg" : "Non-veg"}"></span>${it.name}</div>
            ${it.desc ? `<p class="item-desc">${it.desc}</p>` : ""}
            <div class="item-price">${money(it.price)}</div>
          </div>
          <div class="ctl" data-ctl="${it.id}">${controlHTML(it.id)}</div>
        </article>`;
      });
      html += `</div></section>`;
    });
    $("#menu").innerHTML = html || `<p class="empty">No items match your search.</p>`;
    $("#cat-nav").innerHTML = nav;
    observeCategories();
  }

  function refreshControls() {
    document.querySelectorAll("[data-ctl]").forEach((el) => (el.innerHTML = controlHTML(el.dataset.ctl)));
  }

  // ---------- Cart ----------
  function change(id, delta) {
    cart[id] = (cart[id] || 0) + delta;
    if (cart[id] <= 0) delete cart[id];
    save();
    refreshControls();
    renderCart();
  }

  function renderCart() {
    const n = count();
    $("#cart-bar").classList.toggle("hidden", n === 0);
    $("#cart-bar-count").textContent = n + (n === 1 ? " item" : " items");
    $("#cart-bar-total").textContent = money(total());
    $("#cart-total").textContent = money(total());
    $("#checkout-total").textContent = money(total());

    const ids = Object.keys(cart);
    $("#cart-list").innerHTML = ids.length
      ? ids.map((id) => {
          const it = items[id];
          return `<li>
            <div><div class="ci-name"><span class="dot ${it.type}"></span>${it.name}</div>
            <div class="ci-price">${money(it.price)} × ${cart[id]} = ${money(it.price * cart[id])}</div></div>
            <div class="ctl">${controlHTML(id)}</div>
          </li>`;
        }).join("")
      : `<li class="muted">Your cart is empty.</li>`;
    $("#to-checkout").disabled = !ids.length;
    if (!ids.length && !$("#drawer").classList.contains("hidden") && $("#done-view").classList.contains("hidden")) showView("cart");
  }

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-add],[data-inc],[data-dec]");
    if (!t) return;
    if (t.dataset.add) change(t.dataset.add, 1);
    if (t.dataset.inc) change(t.dataset.inc, 1);
    if (t.dataset.dec) change(t.dataset.dec, -1);
  });

  // ---------- Filters & search ----------
  document.querySelectorAll(".chip").forEach((c) =>
    c.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach((x) => x.classList.remove("active"));
      c.classList.add("active");
      filter = c.dataset.filter;
      renderMenu();
    })
  );
  $("#search").addEventListener("input", (e) => { query = e.target.value; renderMenu(); });

  // Highlight active category while scrolling
  let observer;
  function observeCategories() {
    if (observer) observer.disconnect();
    if (!("IntersectionObserver" in window)) return;
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          document.querySelectorAll(".cat-nav a").forEach((a) => {
            const on = a.dataset.cat === en.target.id;
            a.classList.toggle("active", on);
            if (on) a.scrollIntoView({ block: "nearest", inline: "center" });
          });
        });
      },
      { rootMargin: "-160px 0px -60% 0px" }
    );
    document.querySelectorAll(".category").forEach((s) => observer.observe(s));
  }

  // ---------- Drawer ----------
  function showView(v) {
    $("#cart-view").classList.toggle("hidden", v !== "cart");
    $("#checkout-view").classList.toggle("hidden", v !== "checkout");
    $("#done-view").classList.toggle("hidden", v !== "done");
    $("#drawer-title").textContent = v === "checkout" ? "Delivery details" : v === "done" ? "Order sent" : "Your order";
    $("#drawer").scrollTop = 0;
  }
  function openDrawer(v) {
    showView(v || "cart");
    $("#drawer").classList.remove("hidden");
    $("#overlay").classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
  function closeDrawer() {
    $("#drawer").classList.add("hidden");
    $("#overlay").classList.add("hidden");
    document.body.style.overflow = "";
  }
  $("#cart-bar").addEventListener("click", () => openDrawer("cart"));
  $("#close-drawer").addEventListener("click", closeDrawer);
  $("#overlay").addEventListener("click", closeDrawer);
  $("#to-checkout").addEventListener("click", () => showView("checkout"));
  $("#back-to-cart").addEventListener("click", () => showView("cart"));
  $("#new-order").addEventListener("click", () => { closeDrawer(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });

  // ---------- Location ----------
  const form = $("#checkout-form");
  try {
    const saved = JSON.parse(localStorage.getItem("kc-customer") || "{}");
    ["name", "phone", "address", "landmark"].forEach((k) => { if (saved[k]) form.elements[k].value = saved[k]; });
  } catch (e) {}

  $("#get-location").addEventListener("click", () => {
    const box = document.querySelector(".location-box");
    const status = $("#loc-status");
    if (!navigator.geolocation) {
      status.textContent = "Your browser can't share location. Please add a clear landmark.";
      return;
    }
    status.textContent = "Getting your location… please tap Allow.";
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        location = { lat: pos.coords.latitude, lng: pos.coords.longitude, acc: Math.round(pos.coords.accuracy) };
        box.classList.remove("invalid");
        box.classList.add("ok");
        $("#form-error").classList.add("hidden");
        status.innerHTML = `Location captured ✓ (±${location.acc} m) · <a href="${mapsLink()}" target="_blank" rel="noopener">check on map</a>`;
        $("#get-location").textContent = "📍 Update location";
      },
      (err) => {
        status.textContent =
          err.code === 1
            ? "Location permission was blocked. Please allow location for this site in your browser settings and try again."
            : "Couldn't get your location. Please try again, ideally with GPS on.";
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  });

  const mapsLink = () => `https://www.google.com/maps?q=${location.lat.toFixed(6)},${location.lng.toFixed(6)}`;

  // ---------- Place order ----------
  let lastWaUrl = "";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = form.elements;
    const err = $("#form-error");
    let problems = [];
    ["name", "phone", "address"].forEach((k) => {
      const ok = f[k].value.trim() && f[k].checkValidity();
      f[k].classList.toggle("invalid", !ok);
      if (!ok) problems.push(k);
    });
    const phoneDigits = f.phone.value.replace(/\D/g, "");
    if (phoneDigits.length < 10) { f.phone.classList.add("invalid"); if (!problems.includes("phone")) problems.push("phone"); }
    if (!location) {
      document.querySelector(".location-box").classList.add("invalid");
      problems.push("location");
    }
    if (!count()) problems.push("cart");

    if (problems.length) {
      const msgs = { name: "your name", phone: "a valid phone number", address: "your delivery address", location: "your current location (tap Share my location)", cart: "at least one item" };
      err.textContent = "Please add " + problems.map((p) => msgs[p]).join(", ") + ".";
      err.classList.remove("hidden");
      return;
    }
    err.classList.add("hidden");

    try {
      localStorage.setItem("kc-customer", JSON.stringify({
        name: f.name.value.trim(), phone: f.phone.value.trim(), address: f.address.value.trim(), landmark: f.landmark.value.trim(),
      }));
    } catch (e2) {}

    const orderId = "KC" + Date.now().toString().slice(-6);
    const lines = [];
    lines.push(`*New order – ${SETTINGS.cafeName}*`);
    lines.push(`Order ID: ${orderId}`);
    lines.push("");
    lines.push("*Items*");
    Object.entries(cart).forEach(([id, q]) => {
      const it = items[id];
      lines.push(`• ${it.name} ${it.type === "veg" ? "(Veg)" : "(Non-veg)"} × ${q} = ${money(it.price * q)}`);
    });
    lines.push("");
    lines.push(`*Total: ${money(total())}*`);
    lines.push("Payment: UPI (staff will call to collect)");
    lines.push("");
    lines.push("*Customer*");
    lines.push(`Name: ${f.name.value.trim()}`);
    lines.push(`Phone: ${f.phone.value.trim()}`);
    lines.push(`Address: ${f.address.value.trim()}`);
    if (f.landmark.value.trim()) lines.push(`Landmark: ${f.landmark.value.trim()}`);
    lines.push(`Location: ${mapsLink()}`);
    if (f.notes.value.trim()) { lines.push(""); lines.push(`Notes: ${f.notes.value.trim()}`); }

    lastWaUrl = `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    $("#resend-link").href = lastWaUrl;
    window.open(lastWaUrl, "_blank");

    cart = {};
    save();
    refreshControls();
    renderCart();
    showView("done");
  });

  // ---------- Init ----------
  renderMenu();
  renderCart();
})();
