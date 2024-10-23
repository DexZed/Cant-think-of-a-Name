import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./exp.scss";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <User></User>
    </>
  );
}

const User: React.FC = () => {
  // TypeScript Declaration
  let age: number = 25;
  let name: string = "John Doe";
  let isAdmin: boolean = true;
  // Inline Styles
  var style: {
    backgroundColor: string;
    color: string;
    padding: string;
    borderRadius: string;
    border: string
  } = {
    backgroundColor: isAdmin ? "green" : "red", //sets color base on isadmin bool value
    color: "Blue",
    padding: "10px",
    borderRadius: "5px",
    border:"thin solid lightblue"
  };
  // Dynamic Class Name + SCSS Class 
  return (
    <div className='user' style={style}>
      <h2>User Component</h2>
      <p>This is a user component</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is Admin: {isAdmin.toString()}</p>
    </div>
  );
};
export default App;
