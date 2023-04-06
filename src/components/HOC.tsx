import React, { useState } from "react";

// export default function HOC(Children: any) {
//   function NewHOC() {
//     const [count, setCount] = useState(0);
//     const handleCount = () => {
//       setCount(count + 1);
//     };
//     return <Children count={count} handleCount={handleCount} />;
//   }
//   return NewHOC;
// }

const HOC = (Children: any) => {
  const NewFun = (props: any) => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
      setCount(count + 1);
    };
    return <Children count={count} handleCount={handleCount} {...props} />;
  };
  return NewFun;
};

export default HOC;
