import React from 'react';
import { useCounter } from '@monorepo/shared';

export const Component = () => {
  const {count, setCount} = useCounter(2);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};
