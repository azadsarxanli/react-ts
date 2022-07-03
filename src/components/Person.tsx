import React from "react";
type PersonProps = {
  name: {
    first: string;
    last: string;
  };
  age?: number;
};
const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
      <p>salam menim adim rasimdir</p>
    </div>
  );
};

export default Person;
