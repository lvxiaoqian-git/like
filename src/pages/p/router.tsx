import { Route, RouteProps } from "react-router-dom";
import { Home } from "./Home";
import { Home1 } from "./Home1";

const routes: RouteProps[] = [
  { path: "/home", component: Home },
  { path: "/home1", component: Home1 },
];

export function PRouter() {
  return (
    <>
      {routes.map((item, index) => (
        <Route {...item} path={`${item.path}`} key={index} />
      ))}
    </>
  );
}
