
import React from "react";
// import "./style.css";

export default function Heading({totitle, title, subtitle}) {
  return (
    <div className="heading">
      <h4>{totitle}</h4>
      <h1>{title}</h1>
      <p>{subtitle}</p>
       
    </div>
  );
}
