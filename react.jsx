import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// ===== Child Component (Props, Keys) =====
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>🍎 {item}</li>
      ))}
    </ul>
  );
}

// ===== Form Component (State, Events, Refs) =====
function FormExample() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
    setName("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter name:{" "}
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

// ===== Home Component =====
function Home() {
  const [fruits] = useState(["Apple", "Banana", "Cherry"]);
  return (
    <div>
      <h2>Home Component</h2>
      <ItemList items={fruits} />
    </div>
  );
}

// ===== About Component =====
function About() {
  return (
    <div>
      <h2>About Component</h2>
      <p>This demonstrates React Router navigation.</p>
    </div>
  );
}

// ===== App Component (JSX, Router) =====
export default function App() {
  return (
    <Router>
      <div style={{ fontFamily: "sans-serif", margin: "20px" }}>
        <h1>React Example – All Core Concepts</h1>

        {/* ===== Navigation (Router Links) ===== */}
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/form" style={{ marginRight: "10px" }}>
            Form
          </Link>
          <Link to="/about">About</Link>
        </nav>
        <hr />

        {/* ===== Route Handling ===== */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormExample />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}


// how to run code
// npm run dev
