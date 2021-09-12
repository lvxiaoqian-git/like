import { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import "./index.less";
export interface HomeProps {
  pathname?: string;
}

function Life() {
  return <div>
    dsadsada
    <p>dsa</p>
    <p>dsa</p>
    <p>dsa</p>
    <p>dsa</p>
    <p>dsa</p>
    <p>dsa</p>
    <p>dsa</p>
    <p>dsa</p>
    <p>dsa</p>
    <p>dsa</p>
  </div>
}

export function Home(props: HomeProps) {
  const history = useHistory();
  const [move, setMove] = useState(false);

  return (
    <div className="home">
      <div className={`home__study ${move ? "home__study-move" : ""}`} onClick={() => {
        history.push('/home/life')
        setMove(true)
      }}></div>
      <div className={`home__live ${move ? "home__live-move" : ""}`} onClick={() => {
        history.push('/home/life')
        setMove(true)
      }}></div>
      <Route path="/home/life" component={Life}></Route>
    </div>
  );
}
