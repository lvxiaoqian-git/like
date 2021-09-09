import React from "react";
import { Link } from "react-router-dom";
import "./index.less";
export interface HomeProps {
  pathname?: string;
}

export function Home(props: HomeProps) {
  return (
    <div className="home">
      <Link to="/home1">去home1</Link>
    </div>
  );
}
