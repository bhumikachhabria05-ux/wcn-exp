// ===== 1. CALLBACKS =====
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback(); // call the callback function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye); // callback demonstration


// ===== 2. EVENTS =====
const EventEmitter = require("events");
const event = new EventEmitter();

// listener (callback when event is triggered)
event.on("userJoined", (user) => {
  console.log(`✅ Event triggered: ${user} joined the chat!`);
});

// emit (trigger the event)
event.emit("userJoined", "Bob");


// ===== 3. LOOPS =====
console.log("Counting numbers:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// ===== 4. EXPRESS APP =====
const express = require("express");
const app = express();
const PORT = 3000;

// simple route
app.get("/", (req, res) => {
  res.send("Hello from Express! 🚀");
});

// another route
app.get("/about", (req, res) => {
  res.send("This is a simple Express app example.");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// how to run a code
// node app.js
