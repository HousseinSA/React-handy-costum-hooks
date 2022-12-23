import React from "react"
import { useState } from "react"
import useTimeout from "./useTimeout"
export default function Timeoutcomponent() {
  const [count, setCount] = useState(10)
  const { reset, clear } = useTimeout(() => setCount(0), 1000)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((e) => e + 1)}>increment</button>
      <button onClick={clear}>clear</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}
