import React, { useState } from "react";
import HOC from "./HOC";

const Hover = (props: any) => {
  //   const [count, setCount] = useState(0);
  //   const handleCount = () => {
  //     setCount(count + 1);
  //   };

  const { handleCount, count } = props;

  return (
    <>
      <h3 onMouseOver={handleCount} style={{ backgroundColor: "orange" }}>
        HOVER OVER ME {count} times
      </h3>
    </>
  );
};

export default HOC(Hover);
