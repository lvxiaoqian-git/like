import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { isMobile } from "../../../utils/isMobile";

import "./index.less";
export interface HomeProps {
  pathname?: string;
}

export function Home1(props: HomeProps) {
  const history = useHistory();
  console.log(useLocation(), isMobile(), history);
  return (
    <div className="home">
      <Link to="/home">去Home</Link>
      <ul>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
      </ul>
    </div>
  );
}
