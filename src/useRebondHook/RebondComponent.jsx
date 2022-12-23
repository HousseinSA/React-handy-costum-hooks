import React from "react"
import { useState } from "react"
import useRebond from "./useRebond"
export default function RebondComponent() {
  const [count, setCount] = useState(10)
  useRebond(() => alert(count), 1000, count)
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((e) => e + 1)}>increment</button>
    </>
  )
}
