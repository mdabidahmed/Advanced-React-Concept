import React from 'react';
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
const Greet = (props: GreetProps) => {
  const {messageCount = 0} = props;
  return (
    <div>
      <h4>
        {props.isLoggedIn
          ? `Welcome ${props.name} you have  ${messageCount} unread message`
          : 'Welcome Guest'}
      </h4>
    </div>
  );
};

export default Greet;
