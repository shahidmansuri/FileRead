import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FilesInput from "./Components/FilesInput";

function App() {
  const [Loading, setLoading] = useState<Boolean>(false);

  return (
    <div className="App">
      {Loading && <h1>Loading</h1>}
      <FilesInput loadinig={d => setLoading(d)} />
    </div>
  );
}

export default App;
