/* eslint-disable react-hooks/refs */
import React, { useEffect, useRef, useState } from "react";

function Ref() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count; // update the ref
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Ref;
