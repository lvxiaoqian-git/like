import { Route, RouteProps } from "react-router-dom";

import { Home } from "./Home";

const routes: RouteProps[] = [
  { path: "/home", component: Home },
];

export function MRouter() {
  return (
    <div>
      {routes.map((item, index) => (
        <Route {...item} path={`/m${item.path}`} key={index} />
      ))}
    </div>
  );
}
