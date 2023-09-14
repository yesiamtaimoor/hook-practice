import React, { memo } from 'react';

const Child = ({ callback }) => {
  console.log("Custom Callback Component");
  
  return (
    <div>
      <p>Child Component</p>
    </div>
  );
};

export default memo(Child);