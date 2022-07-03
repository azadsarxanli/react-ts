import React, { useEffect, useRef } from "react";

const Domref = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default Domref;
