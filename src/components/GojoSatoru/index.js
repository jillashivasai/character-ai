import React from "react";
import SideBar from "../SideBar";
import "./gojo.css";

export default function GojoSatoru() {
  return (
    <div className="rows">
      <SideBar className="position"/>
      <div className="align-right">
        <h1>Hello gojo</h1>
      </div>
    </div>
  );
}
