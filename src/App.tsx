import "./App.css";
import { ReactElement, useEffect } from "react";
import { Index } from "./router";

function App(): ReactElement<any, any> {
  useEffect(() => {
    console.log(global);
  });

  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
