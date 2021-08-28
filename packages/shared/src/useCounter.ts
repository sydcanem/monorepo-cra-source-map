import { useState } from 'react';

export function useCounter(initial: number = 0) {
  const [count, setCount] = useState(initial);
  return {
    count,
    setCount,
  };
};
