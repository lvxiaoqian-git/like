import React, { useEffect, useState } from "react";
import { Route, useHistory, useLocation } from "react-router-dom";
import "./index.less";
export interface HomeProps {
  pathname?: string;
  location?: { pathname: string };
}

function Life() {
  return (
    <div>
      dsadsada
      <p>dsa</p>
      <p>dsa</p>
    </div>
  );
}

export function Home(props: HomeProps) {
  const history = useHistory();
  const [move, setMove] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/home") {
      // 本来要加路由监听，突然发现hooks中的effect hook可以结合props来监听路由
      // 那么home就可以直接作为页面的layout来使用啦
      setMove(false);
    }
  }, [pathname]);

  return (
    <div className="home">
      {/* 自己写过渡，好奇怪，后期用库吧，动画是此项目的核心之一 */}
      <div
        className={`home__study ${move ? "home__study-move" : ""}`}
        onClick={() => {
          history.push("/home/life");
          setMove(true);
        }}
      ></div>
      <div
        className={`home__live ${move ? "home__live-move" : ""}`}
        onClick={() => {
          history.push("/home/life");
          setMove(true);
        }}
      ></div>
      {/* 直接跳转子路由，这里的我觉得还不错，但是具有优化的地方，路由可以集中管理，毕竟是"单页面应用" */}
      <Route path="/home/life" component={Life}></Route>
    </div>
  );
}
