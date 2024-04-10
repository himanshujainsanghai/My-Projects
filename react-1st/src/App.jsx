import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Kgbutton from "./Kgbutton";
import Hello from "./Hello";
import Random from "./Random";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello Himanshu jain</h1>
        <p>lets kickstart our react journey</p>
        <Hello></Hello>
        <button>like it</button>
        <Kgbutton></Kgbutton>
        <Random></Random>
        <Random></Random>
        <Random></Random>
        <Random></Random>
        <button type="button" class="btn btn-primary">
          Primary
        </button>
        <button type="button" class="btn btn-secondary">
          Secondary
        </button>
        <button type="button" class="btn btn-success">
          Success
        </button>
        <button type="button" class="btn btn-danger">
          Danger
        </button>
        <button type="button" class="btn btn-warning">
          Warning
        </button>
        <button type="button" class="btn btn-info">
          Info
        </button>
        <button type="button" class="btn btn-light">
          Light
        </button>
        <button type="button" class="btn btn-dark">
          Dark
        </button>

        <button type="button" class="btn btn-link">
          Link
        </button>
      </div>
    </>
  );
}

export default App;
