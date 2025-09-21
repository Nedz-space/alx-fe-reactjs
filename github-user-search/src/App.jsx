import { useState } from 'react'
import './App.css'
import Search from "./components/Search";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;
