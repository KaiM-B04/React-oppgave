// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React from "react";
import classesData from "./JavaScript/classes";
import ClassCard from "./Components/ClassCard";
import "./App.css";

// Original kode:
//   const [count, setCount] = useState(0);
//  <div>

/* <a href="https://vitejs.dev" target="_blank">
<img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
<img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
count is {count}
</button>
<p>
Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */

function App() {
  return (
    <>
      <div className="App">
        <h1>Baldur&apos; Gate 3 Playable Classes</h1>
        <div className="class-card-container">
          {classesData.map((classInfo, index) => (
            <ClassCard
              key={index}
              className={classInfo.name}
              description={classInfo.description}
              subClasses={classInfo.subclasses}
              features={classInfo.features}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
