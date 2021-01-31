import React from "react";

//props.arr - tablica liczb które będą zawartością nowej tablicy
export default function MyArray(props) {
  let elements = props.arr.map((e, i) => element(e, i));
  const arrayContainer = {
    position: "relative",
    backgroundColor: "white",
    width: `${74 * props.arr.length + 8}px`,
    // alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
    border: "4px solid black",
    // display: "inline-block",
    animationDuration: "1s",
    animationName: "xd",
  };
  return (
    <div style={arrayContainer} id="arrayki">
      {elements}
    </div>
  );
}

function element(value, key) {
  return (
    <div
      key={key}
      style={{
        backgroundColor: "#209781",
        color: "black",
        textShadow: "none",
        textAlign: "center",
        width: "70px",
        height: "70px",
        margin: "2px",
        padding: "26px",
        display: "inline-block",
        border: "2px solid black",
        lineHeight: "50%",
      }}
    >
      {value}
    </div>
  );
}
