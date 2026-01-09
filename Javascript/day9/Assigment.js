//1. convert array of letters to array of words
const inputArr = [
  "b","a","k","e","",
  "c","a","k","e","",
  "e","a","t"
];
const words = inputArr.reduce((acc, ch) => {
  if (ch === "") {
    acc.push("");              // start new word
  } else {
    if (acc.length === 0) acc.push("");
    acc[acc.length - 1] = acc[acc.length - 1].concat(ch); // build word
  }
  return acc;
}, []).filter(w => w !== "");

console.log(words); // ['bake','cake','eat']


// 2. Get all expired medicines (compare with today)
const medicines = [
  { id: 1, name: "Paracetamol", category: "Pain Relief", price: 30, expiry: "2026-01-01" },
  { id: 2, name: "Amoxicillin", category: "Antibiotic", price: 120, expiry: "2025-12-01" },
  { id: 3, name: "Cetirizine", category: "Allergy", price: 50, expiry: "2024-05-01" },
  { id: 4, name: "Ibuprofen", category: "Pain Relief", price: 90, expiry: "2026-03-01" },
  { id: 5, name: "Cough Syrup", category: "Cold", price: 75, expiry: "2025-08-01" },
];

// set “today” as string
const today = "2026-01-04";

const expired = medicines.filter(m => m.expiry < today);
console.log(expired);


// 3) Group medicines by category and count total stock

const stockCountByCategory = medicines.reduce((acc, m) => {
  acc[m.category] = (acc[m.category] || 0) + 1;
  return acc;
}, {});

console.log(stockCountByCategory);


// 1) Department with highest average salary

const employees = [
  { name: "Alice", department: "HR", salary: 40000 },
  { name: "Bob", department: "IT", salary: 50000 },
  { name: "Charlie", department: "IT", salary: 60000 },
  { name: "David", department: "HR", salary: 45000 }
];

// group -> { dept: {sum, count} }
const deptAgg = employees.reduce((acc, e) => {
  acc[e.department] = acc[e.department] || { sum: 0, count: 0 };
  acc[e.department].sum += e.salary;
  acc[e.department].count += 1;
  return acc;
}, {});

// find max avg
const bestDept = Object.entries(deptAgg).reduce((best, [dept, obj]) => {
  const avg = obj.sum / obj.count;
  return avg > best.avg ? { dept, avg } : best;
}, { dept: "", avg: -Infinity });

console.log(bestDept.dept); // "IT"

// 2) Top 2 products with highest total sales (price × quantity)
const products1 = [
  { name: "Laptop", price: 1000, quantity: 4 },
  { name: "Phone", price: 500, quantity: 10 },
  { name: "Tablet", price: 800, quantity: 5 }
];

const top2 = products1
  .map(p => ({ name: p.name, total: p.price * p.quantity }))
  .toSorted((a, b) => b.total - a.total)
  .slice(0, 2)
  .map(x => x.name);

console.log(top2); // ["Phone","Tablet"]


// 3) Group books by genre
const books = [
  { title: "Book A", genre: "Fiction", year: 2015 },
  { title: "Book B", genre: "Non-Fiction", year: 2020 },
  { title: "Book C", genre: "Fiction", year: 2018 },
  { title: "Book D", genre: "Non-Fiction", year: 2010 }
];

const grouped = books.reduce((acc, b) => {
  const key = b.genre.toLowerCase();
  acc[key] = acc[key] || [];
  acc[key].push(b);
  return acc;
}, {});

console.log(grouped);


// 4) Customers who placed orders in last 30 days (Assume today = 2025-08-08)
const orders = [
  { id: 1, customer: "Alice", date: "2025-07-20" },
  { id: 2, customer: "Bob", date: "2025-08-05" },
  { id: 3, customer: "Charlie", date: "2025-06-15" }
];

const today2 = "2025-08-08";
// last 30 days starts at "2025-07-09" (given assumption)
const start = "2025-07-09";

const recentCustomers = orders
  .filter(o => o.date >= start && o.date <= today2)
  .map(o => o.customer);

console.log(recentCustomers); // ["Alice","Bob"]


// 5) Leaderboard from game scores (each player’s highest score)
const games = [
  { player: "Alice", score: 40 },
  { player: "Bob", score: 60 },
  { player: "Alice", score: 70 },
  { player: "Bob", score: 55 }
];

const bestScores = games.reduce((acc, g) => {
  acc[g.player] = acc[g.player] === undefined ? g.score : (g.score > acc[g.player] ? g.score : acc[g.player]);
  return acc;
}, {});

const leaderboard = Object.entries(bestScores)
  .map(([player, score]) => ({ player, score }))
  .toSorted((a, b) => b.score - a.score);

console.log(leaderboard);
// [{ player:"Alice", score:70 }, { player:"Bob", score:60 }]

// 6) Merge orders with customer details (join by id)
const customers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const ordersList = [
  { orderId: 101, customerId: 1 },
  { orderId: 102, customerId: 2 }
];

const merged = ordersList.map(o => {
  const c = customers.find(x => x.id === o.customerId);
  return { ...o, name: c ? c.name : undefined };
});

console.log(merged);

// 7) Group products by price range (low/medium/high)
const products2 = [
  { id: 1, name: "Laptop", price: 50000, quantity: 2 },
  { id: 2, name: "Mobile", price: 20000, quantity: 5 },
  { id: 3, name: "Headphones", price: 2000, quantity: 10 },
  { id: 4, name: "Keyboard", price: 1500, quantity: 4 },
  { id: 5, name: "Monitor", price: 12000, quantity: 3 }
];

const byRange = products2.reduce((acc, p) => {
  const key = (p.price <= 5000) ? "low" : (p.price <= 20000 ? "medium" : "high");
  acc[key] = acc[key] || [];
  acc[key].push(p);
  return acc;
}, { low: [], medium: [], high: [] });

console.log(byRange);

// 11) Total value of medicines per category (price × quantity)
const medicines2 = [
  { id: 1, name: "Paracetamol", price: 20, quantity: 10, category: "Pain Relief" },
  { id: 2, name: "Amoxicillin", price: 50, quantity: 5, category: "Antibiotic" },
  { id: 3, name: "Cetirizine", price: 15, quantity: 20, category: "Allergy" },
  { id: 4, name: "Ibuprofen", price: 30, quantity: 7, category: "Pain Relief" },
  { id: 5, name: "Azithromycin", price: 100, quantity: 3, category: "Antibiotic" }
];

const totalValue = medicines2.reduce((acc, m) => {
  acc[m.category] = (acc[m.category] || 0) + (m.price * m.quantity);
  return acc;
}, {});

console.log(totalValue);
// { "Pain Relief": 410, "Antibiotic": 550, "Allergy": 300 }
