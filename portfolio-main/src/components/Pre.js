import React from "react";
import logor from "../Assets/logor.png";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-rotate"}>
      <div className="rotating-image" style={{ backgroundImage: `url(${logor})` }} />
    </div>
  );
}

export default Pre;
