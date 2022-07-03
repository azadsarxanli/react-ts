import React from "react";
type OscarProps = {
  children?: React.ReactNode;
};
const Oscar = (props: OscarProps) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

export default Oscar;
