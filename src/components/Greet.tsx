import React from "react";
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn?: boolean;

  // [key: string]: any;
};
const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn && (
        <>
          props.isLoggedIn && ( <div>Greeting {props.name}</div>
          <p>
            {props.messageCount && (
              <p>You have {props.messageCount} messages</p>
            )}
          </p>
          props.isLoggedIn && (
        </>
      )}
      {!props.isLoggedIn && (
        <div>
          <p>You are not logged in</p>
        </div>
      )}
    </div>
  );
};

export default Greet;
