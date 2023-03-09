import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div>      
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
    </div>
  );
}
