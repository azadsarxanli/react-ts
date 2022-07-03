import React from "react";
// type array
type PersonListProps = {
  people: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h1>Person List</h1>
      {props.people.map((person) => (
        <div key={person.first}>
          <span>name: {person.first}</span> <span>last: {person.last}</span>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
