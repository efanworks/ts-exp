import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return <div onClick={() => setCount(count + 1)}>{count}</div>;
}

App.description = "hello";
