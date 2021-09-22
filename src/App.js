import "./App.css";
import React, {useState, useEffect} from "react";

function App() {

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    document.title = `Counter (${counter})`;
  });

  return (
    <div className="App">
      <button onClick={() => setCounter(counter + 1)}>Count ({counter})</button>
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
      </div>
    </div>
  );
}

export default App;
