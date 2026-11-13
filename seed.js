// Optional: fills the DB with 12 sample products across 5 categories.
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const data = [
  { name: 'Study Table', sku: 'FURN-TB-812', category: 'Furniture', price: 3999, quantity: 2, reorderLevel: 4, supplier: 'IKEA India' },
  { name: 'Office Chair', sku: 'FURN-CH-114', category: 'Furniture', price: 5499, quantity: 15, reorderLevel: 5, supplier: 'Godrej Interio' },
  { name: 'Laptop 15"', sku: 'ELEC-LP-201', category: 'Electronics', price: 54999, quantity: 5, reorderLevel: 5, supplier: 'Dell India' },
  { name: 'Wireless Mouse', sku: 'ELEC-MS-310', category: 'Electronics', price: 799, quantity: 60, reorderLevel: 20, supplier: 'Logitech' },
  { name: 'Bluetooth Speaker', sku: 'ELEC-SP-422', category: 'Electronics', price: 2499, quantity: 25, reorderLevel: 10, supplier: 'boAt' },
  { name: 'Smart Watch', sku: 'ELEC-SW-533', category: 'Electronics', price: 6999, quantity: 6, reorderLevel: 8, supplier: 'Noise' },
  { name: 'Cotton T-Shirt', sku: 'APPL-TS-101', category: 'Apparel', price: 599, quantity: 50, reorderLevel: 15, supplier: 'Fabindia' },
  { name: 'Denim Jacket', sku: 'APPL-JK-202', category: 'Apparel', price: 2199, quantity: 28, reorderLevel: 10, supplier: 'Levis' },
  { name: 'Gel Pen Pack of 15', sku: 'STNY-PN-713', category: 'Stationery', price: 120, quantity: 40, reorderLevel: 20, supplier: 'Cello Pens' },
  { name: 'A4 Notebook', sku: 'STNY-NB-714', category: 'Stationery', price: 90, quantity: 12, reorderLevel: 25, supplier: 'Classmate' },
  { name: 'Basmati Rice 5kg', sku: 'GROC-RC-901', category: 'Grocery', price: 650, quantity: 30, reorderLevel: 10, supplier: 'India Gate' },
  { name: 'Olive Oil 1L', sku: 'GROC-OL-902', category: 'Grocery', price: 899, quantity: 3, reorderLevel: 8, supplier: 'Figaro' },
];

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany();
  await Product.insertMany(data);
  console.log(`Seeded ${data.length} products`);
  await mongoose.disconnect();
})();
