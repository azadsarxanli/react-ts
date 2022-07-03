import React from "react";
type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
const Input = (props: InputProps) => {
  return (
    <div>
      <input
        value={props.value}
        type="text"
        onChange={(event) => props.onChange(event)}
      />
    </div>
  );
};

export default Input;
