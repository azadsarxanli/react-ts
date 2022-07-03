import React from "react";
type ClickProps = {
  //   click event handler
  click: (
    event: React.MouseEvent<HTMLHeadingElement, MouseEvent>,
    id: number
  ) => void;
};
const Click = (props: ClickProps) => {
  return (
    <div>
      <h1 onClick={(event) => props.click(event, 1)}>Click</h1>
    </div>
  );
};

export default Click;
