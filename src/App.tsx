import React from "react";
import "./App.css";

import { skills } from "./data/EO4/landsknecht";

function App() {
  return (
    <>
      <h1>Etrian Oddyssey Skills detail</h1>
      {skills.map((skill: any) => (
        <div className="card">{skill.name_en}</div>
      ))}
    </>
  );
}

export default App;
