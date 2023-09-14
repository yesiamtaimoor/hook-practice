import React, { useCallback, useState } from 'react';
import Child from './Child';

const Usecallback = () => {
  const [add, setAdd] = useState(0);
  const [run, setRun] = useState(0);

  const runfunction = useCallback(() => {}, []);

  const handleAddClick = () => {
    setAdd(add + 1);
  };

  const handleRunClick = () => {
    setRun(run + 1);
  };

  return (
    <div>
      <Child runfunction={runfunction} run={run} />
      <p>{add}</p>
      <button type="button" onClick={handleAddClick}>
        Add
      </button>
      <p>{run}</p>
      <button type="button" onClick={handleRunClick}>
        Run
      </button>
    </div>
  );
};

export default Usecallback;
