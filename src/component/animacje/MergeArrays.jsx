import React from "react";
import MyArray from "./MyArray";

function MergeArrays(props) {
  console.log(props);
  return props.data.map((e, i) => (
    <div id="myArray" key={i}>
      <MyArray arr={e} />
    </div>
  ));
}

export default MergeArrays;
