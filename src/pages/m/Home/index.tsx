import React from "react";
import { useHistory } from "react-router";
import "./index.less";
export interface HomeProps {
  pathname?: string;
}

export function Home(props: HomeProps) {
  const history = useHistory();
  return (
    <div className="home">
      <button
        onClick={() => {
          history.push("/m/home1");
        }}
      >
        sadsa
      </button>
    </div>
  );
}
