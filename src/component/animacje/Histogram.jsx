import React from "react";

export default function Histogram(props) {
  const outs = [0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
    return (
      <div className="output-element" key={index}>
        <p> 0 </p>
      </div>
    );
  });
  const elementy = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
    return (
      <div className="histogram-element" key={index}>
        <p> 0 </p>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="histogram-container">{elementy}</div>
      <div className="output-container"> {outs} </div>
    </React.Fragment>
  );
}
