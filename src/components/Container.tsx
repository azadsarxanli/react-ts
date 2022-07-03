import React from "react";
type ContainerProps = {
  cssProps?: React.CSSProperties;
};
const Container = (props: ContainerProps) => {
  return <div style={props.cssProps}>Container</div>;
};

export default Container;
