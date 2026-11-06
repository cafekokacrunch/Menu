// =====================================================
//  CAFE KOKA CRUNCH – SETTINGS & MENU
//  This is the only file you need to edit to change
//  prices, items, or the WhatsApp number.
// =====================================================

const SETTINGS = {
  cafeName: "Cafe Koka Crunch",
  tagline: "Good Food · Good Mood · Kokapet, Hyderabad",
  // WhatsApp number that receives orders: country code + number, digits only.
  whatsappNumber: "917396827878",
  phoneDisplay: "+91 73968 27878",
  instagram: "https://www.instagram.com/kokacrunch_karaoke_cafe/",
  facebook: "https://www.facebook.com/kokacrunchcafe",
  currency: "₹",
  // Delivery area. Set cafeLocation to the cafe's map pin, e.g. { lat: 17.3900, lng: 78.3300 }.
  // While it is null, orders are accepted from any distance.
  cafeLocation: null,
  deliveryRadiusKm: 5,
  deliveryNote: "Free delivery · 100% Halal certified",
  upiNote:
    "No online payment needed now. After you place the order, our staff will call you and share UPI payment details. Please pay via UPI to confirm your order.",
};

// type: "veg" or "nonveg" (egg items count as non-veg).
// badge (optional): "special" = House Special, "musttry" = Must Try.
// storeOnly: true on a category = shown on the menu but can't be ordered online.
const MENU = [
  {
    category: "Rice Bowls",
    items: [
      { name: "Hyderabadi Chicken Rice", price: 129, type: "nonveg", badge: "special" },
      { name: "Spl Hyderabadi Chicken Rice", price: 169, type: "nonveg", badge: "special" },
      { name: "Hyderabadi Veg Rice", price: 119, type: "veg", badge: "musttry" },
      { name: "Chennai Spl Street Chicken Rice", price: 169, type: "nonveg", badge: "special" },
      { name: "Chennai Spl Street Veg Rice", price: 119, type: "veg", badge: "special" },
      { name: "Chinese Chicken Fried Rice", price: 149, type: "nonveg", badge: "musttry" },
      { name: "Chinese Veg Fried Rice", price: 109, type: "veg" },
      { name: "Egg Fried Rice", price: 139, type: "nonveg" },
    ],
  },
  {
    category: "Fried Chicken & Snacks",
    items: [
      { name: "Chicken Crunchy Bucket (6 Pcs)", price: 209, type: "nonveg" },
      { name: "Chicken Lollipops (Regular)", price: 169, type: "nonveg", badge: "special" },
      { name: "Chicken Lollipops (Large)", price: 299, type: "nonveg" },
      { name: "Chicken Wings (Regular)", price: 159, type: "nonveg", badge: "musttry" },
      { name: "Chicken Wings (Large)", price: 279, type: "nonveg", badge: "musttry" },
      { name: "Chicken Crunchy Drumsticks", price: 279, type: "nonveg", badge: "special" },
      { name: "Chicken Popcorn (Regular)", price: 139, type: "nonveg", badge: "musttry" },
      { name: "Chicken Popcorn (Large)", price: 179, type: "nonveg", badge: "musttry" },
      { name: "Chicken Nuggets (6 Pcs)", price: 119, type: "nonveg" },
      { name: "Chicken Nuggets (9 Pcs)", price: 169, type: "nonveg" },
      { name: "Chicken Nuggets (12 Pcs)", price: 209, type: "nonveg" },
    ],
  },
  {
    category: "Burgers",
    items: [
      { name: "Chicken Peri Peri Crunchy Burger", price: 159, type: "nonveg", badge: "special" },
      { name: "Signature Crunchy Burger", price: 189, type: "nonveg", badge: "special" },
      { name: "Chicken Tower Burger", price: 199, type: "nonveg", badge: "musttry" },
      { name: "Chicken Patty Burger", price: 129, type: "nonveg" },
      { name: "Chicken Patty Cheese Burger", price: 139, type: "nonveg" },
      { name: "Chicken Kiddy Burger", price: 99, type: "nonveg" },
      { name: "Veg Patty Burger", price: 109, type: "veg" },
      { name: "Veg Cheese Patty Burger", price: 119, type: "veg" },
      { name: "Veg Paneer Cheese Patty Burger", price: 189, type: "veg", badge: "musttry" },
      { name: "Veg Kiddy Patty Burger", price: 89, type: "veg" },
    ],
  },
  {
    category: "Wraps",
    items: [
      { name: "Telangana Style Chicken Burrito", price: 159, type: "nonveg", badge: "special" },
      { name: "Tandoori Style Chicken Wrap", price: 149, type: "nonveg", badge: "musttry" },
      { name: "Peri-Peri Chicken Wrap", price: 129, type: "nonveg", badge: "musttry" },
      { name: "Cheese Peri-Peri Chicken Wrap", price: 139, type: "nonveg" },
      { name: "Peri Peri Veg Wrap", price: 89, type: "veg", badge: "musttry" },
      { name: "Cheese Veg Wrap", price: 99, type: "veg" },
      { name: "Paneer Veg Wrap", price: 169, type: "veg" },
      { name: "Paneer Cheese Veg Wrap", price: 179, type: "veg" },
      { name: "Tandoori Style Paneer Veg Wrap", price: 189, type: "veg", badge: "musttry" },
    ],
  },
  {
    category: "Momos",
    items: [
      { name: "Chicken Momos", price: 139, type: "nonveg" },
      { name: "Fried Chicken Kurkure Momos", price: 179, type: "nonveg" },
      { name: "Veg Fried Kurkure Momos", price: 169, type: "veg" },
      { name: "Veg Mix Momos", price: 129, type: "veg" },
    ],
  },
  {
    category: "Veg Snacks",
    items: [
      { name: "French Fries (Salty)", price: 79, type: "veg" },
      { name: "Large French Fries (Salty)", price: 129, type: "veg", badge: "musttry" },
      { name: "Peri Peri Fries", price: 89, type: "veg" },
      { name: "Large Peri Peri Fries", price: 139, type: "veg" },
      { name: "Veg Nuggets", price: 89, type: "veg" },
      { name: "Veg Lollipop", price: 109, type: "veg", badge: "special" },
      { name: "Pizza Fingers", price: 109, type: "veg" },
      { name: "Veg Lollipops + Pizza Pockets + Pizza Fingers", price: 139, type: "veg" },
    ],
  },
  {
    category: "Noodles",
    items: [
      { name: "Veg Noodles", price: 109, type: "veg" },
      { name: "Egg Noodles", price: 119, type: "nonveg" },
      { name: "Chicken Noodles", price: 149, type: "nonveg" },
    ],
  },
  {
    category: "Pasta",
    items: [
      { name: "Red Marinara Chicken Pasta", price: 169, type: "nonveg", badge: "special" },
      { name: "White Alfredo Chicken Pasta", price: 189, type: "nonveg", badge: "special" },
      { name: "Red Marinara Veg Pasta", price: 139, type: "veg", badge: "musttry" },
      { name: "White Alfredo Veg Pasta", price: 169, type: "veg", badge: "musttry" },
    ],
  },
  {
    category: "Maggi & Omelettes",
    items: [
      { name: "Maggi", price: 49, type: "veg" },
      { name: "Koka Spl Maggi", price: 89, type: "veg" },
      { name: "Omelette", price: 59, type: "nonveg" },
      { name: "Bread Omelette", price: 79, type: "nonveg" },
      { name: "Cheese Omelette", price: 89, type: "nonveg" },
    ],
  },
  {
    category: "Milk Shakes",
    items: [
      { name: "Chocolate Milk Shake", price: 99, type: "veg" },
      { name: "Oreo Milk Shake", price: 99, type: "veg", badge: "special" },
      { name: "Strawberry Milk Shake", price: 99, type: "veg", badge: "musttry" },
      { name: "Pista Milk Shake", price: 99, type: "veg" },
      { name: "Vanilla Milk Shake", price: 99, type: "veg" },
      { name: "Cold Coffee", price: 99, type: "veg", badge: "special" },
    ],
  },
  {
    category: "Mojitos",
    items: [
      { name: "Green Apple Cranberry Mojito", price: 99, type: "veg", badge: "special" },
      { name: "Panshot Mojito", price: 99, type: "veg" },
      { name: "Cranberry Mojito", price: 99, type: "veg" },
      { name: "Blue Lagoon Mojito", price: 99, type: "veg", badge: "musttry" },
      { name: "Strawberry Mojito", price: 99, type: "veg" },
      { name: "Mango Mojito", price: 99, type: "veg", badge: "musttry" },
      { name: "Blueberry Mojito", price: 99, type: "veg", badge: "musttry" },
      { name: "Virgin Mojito", price: 99, type: "veg", badge: "musttry" },
      { name: "Pineapple Mojito", price: 99, type: "veg" },
      { name: "Kiwi Mojito", price: 99, type: "veg" },
      { name: "Jeera Shot Mojito", price: 99, type: "veg" },
      { name: "Black Currant Mojito", price: 99, type: "veg" },
    ],
  },
  {
    category: "Lassi",
    items: [
      { name: "Plain Lassi", price: 50, type: "veg" },
      { name: "Masala Lassi", price: 60, type: "veg" },
      { name: "Strawberry Lassi", price: 60, type: "veg" },
      { name: "Mango Lassi", price: 60, type: "veg" },
      { name: "Pineapple Lassi", price: 60, type: "veg" },
    ],
  },
  {
    category: "Coffee",
    storeOnly: true,
    items: [
      { name: "Madras Filter Coffee", price: 25, type: "veg" },
      { name: "Bellam Coffee", price: 25, type: "veg" },
      { name: "Black Coffee", price: 25, type: "veg" },
      { name: "Sukku Coffee", price: 25, type: "veg" },
      { name: "Spl Strong Coffee", price: 30, type: "veg" },
    ],
  },
  {
    category: "Tea",
    storeOnly: true,
    items: [
      { name: "Tea", price: 15, type: "veg" },
      { name: "Elachi Tea", price: 20, type: "veg" },
      { name: "Ginger Tea", price: 20, type: "veg" },
      { name: "Badam Tea", price: 20, type: "veg" },
      { name: "Lemon Tea", price: 20, type: "veg" },
      { name: "Green Tea", price: 20, type: "veg" },
      { name: "Spl Masala Green Tea", price: 20, type: "veg" },
      { name: "Black Tea", price: 20, type: "veg" },
    ],
  },
  {
    category: "Milk",
    storeOnly: true,
    items: [
      { name: "Hot Milk", price: 15, type: "veg" },
      { name: "Badam Milk", price: 20, type: "veg" },
      { name: "Pista Milk", price: 20, type: "veg" },
      { name: "Sukku Milk", price: 20, type: "veg" },
      { name: "Boost", price: 20, type: "veg" },
      { name: "Horlicks", price: 20, type: "veg" },
      { name: "Spl Boost", price: 30, type: "veg" },
      { name: "Spl Horlicks", price: 30, type: "veg" },
      { name: "Hot Chocolate", price: 50, type: "veg" },
    ],
  },
];

const STORE_ONLY_NOTE = "Available at the store only · not for delivery";
