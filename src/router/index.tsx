import { BrowserRouter, Route, Link } from "react-router-dom";

function Home1() {
  return <div>1</div>;
}
function Home2() {
  return <div>2</div>;
}
function Home3() {
  return <div>3</div>;
}
function Home4() {
  return <div>4</div>;
}

export function Index() {
  return (
    <BrowserRouter>
      <Link to="/Home1">1</Link>
      <Link to="/Home2">2</Link>
      <Link to="/Home3">3</Link>
      <Link to="/Home4">4</Link>
      <Route path="/Home1" component={Home1}></Route>
      <Route path="/Home2" component={Home2}></Route>
      <Route path="/Home3" component={Home3}></Route>
      <Route path="/Home4" component={Home4}></Route>
    </BrowserRouter>
  );
}
