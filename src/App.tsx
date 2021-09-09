import { ReactElement, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { isMobile } from "./utils/isMobile";
import { MRouter } from "./pages/m/router";
import { PRouter } from "./pages/p/router";

import "./App.css";

function App(): ReactElement<any, any> {
  useEffect(() => {}, []);
  return (
    <div className="App">
      {/* 写这个东西有违单页面应用，很可能在后面会修改，单是先为了兼容移动端可以先这样，反正一时半会也搞不了移动端 */}
      <Router>{isMobile() ? <MRouter /> : <PRouter />}</Router>;
    </div>
  );
}

export default App;
