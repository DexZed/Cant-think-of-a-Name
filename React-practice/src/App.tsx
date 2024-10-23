import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./exp.scss";
function App(properties:object = {idx:1,idx2:2}) { 
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

      <User glasses="M" type="S"></User> 
      {/* Properties needs to be defined in interface */}
      <User {...properties}></User>

    </>
  );
}
 // Define the interface for user props
 interface UserProps {
  glasses?: string;
  type?: string; // Optional prop with default value
  properties?: object;
}
 // Default values for properties
const User: React.FC<UserProps> = ({glasses = "None", type = "N/A",properties={idx :'N/A 234',idx2:'N/A 234'}}) => {
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
      <p>This is a user component: Gender :{glasses} , Type :  {type}</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is Admin: {isAdmin.toString()}</p>
      <p>properties: {} </p>
    </div>
  );
};
export default App;
