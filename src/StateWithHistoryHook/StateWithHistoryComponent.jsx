import React from "react"
import { useState } from "react"
import useStateWithHistory from "./useStateWithHistory"

export default function StateWithHistoryComponent() {
  const [count, setCount, { history, pointer, backward, forward , go }] =
    useStateWithHistory(1)
  const [name, setName] = useState("Hussein")
  return (
    <>
      <div>{count}</div>
      <div>{history.join(",")}</div>
      <div>pointer - {pointer}</div>
      <div>{name}</div>
      <button onClick={() => setCount((e) => e + 1)}>increment</button>
      <button>Double</button>
      <button onClick={()=>go(2)}>go to index 2</button>
      <button onClick={forward}>forward </button>
      <button onClick={backward}> backward</button>
      <button
        onClick={() => setName((e) => (e === "Hussein" ? "Neji" : "Hussein"))}
      >
        change the name
      </button>
    </>
  )
}
