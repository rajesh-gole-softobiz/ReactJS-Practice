import React, { useState } from "react";
import HOC from "./HOC";

const Click = (props: any) => {
  //   const [count, setCount] = useState(0);
  //   const handleCount = () => {
  //     setCount(count + 1);
  //   };

  const { handleCount, count } = props;
  return (
    <>
      <button onClick={handleCount}>
        {props.name} {count} times
      </button>
    </>
  );
};

export default HOC(Click);
