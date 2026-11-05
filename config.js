// =====================================================
//  KOKA CRUNCH – SETTINGS & MENU
//  This is the only file you need to edit to change
//  prices, items, or the WhatsApp number.
// =====================================================

const SETTINGS = {
  cafeName: "Koka Crunch",
  tagline: "Crunchy bites & good vibes · Kokapet, Hyderabad",
  // WhatsApp number that receives orders: country code + number, digits only.
  // Example: "919876543210"  (91 = India)
  whatsappNumber: "910000000000",
  currency: "₹",
  deliveryNote: "Delivery available around Kokapet & nearby areas.",
  upiNote:
    "No online payment needed now. After you place the order, our staff will call you and share UPI payment details. Please pay via UPI to confirm your order.",
};

// type: "veg" or "nonveg".  Prices in rupees.
const MENU = [
  {
    category: "Burgers",
    items: [
      { name: "Classic Veg Crunch Burger", price: 129, type: "veg", desc: "Crispy veg patty, lettuce, house mayo" },
      { name: "Paneer Tikka Burger", price: 159, type: "veg", desc: "Tandoori paneer, onions, mint mayo" },
      { name: "Crispy Chicken Burger", price: 179, type: "nonveg", desc: "Fried chicken fillet, cheese, spicy sauce" },
    ],
  },
  {
    category: "Fries & Sides",
    items: [
      { name: "Salted Fries", price: 99, type: "veg", desc: "Classic golden fries" },
      { name: "Peri Peri Fries", price: 119, type: "veg", desc: "Tossed in peri peri masala" },
      { name: "Chicken Popcorn", price: 169, type: "nonveg", desc: "Bite-sized crunchy chicken" },
    ],
  },
  {
    category: "Sandwiches & Wraps",
    items: [
      { name: "Grilled Veg Sandwich", price: 119, type: "veg", desc: "Loaded veggies, cheese, green chutney" },
      { name: "Chicken Tikka Wrap", price: 169, type: "nonveg", desc: "Smoky chicken tikka in a soft wrap" },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Cold Coffee", price: 129, type: "veg", desc: "Thick & creamy" },
      { name: "Fresh Lime Soda", price: 79, type: "veg", desc: "Sweet or salted" },
      { name: "Oreo Shake", price: 149, type: "veg", desc: "Cookies & cream blend" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Brownie", price: 99, type: "veg", desc: "Warm, fudgy brownie" },
      { name: "Brownie with Ice Cream", price: 149, type: "veg", desc: "Brownie + vanilla scoop" },
    ],
  },
];
