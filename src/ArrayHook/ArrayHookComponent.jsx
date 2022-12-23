import React from "react"
import useArray from "./useArray"

export default function ArrayHookComponent() {
  const { numberArray, push, set, update, clear, remove, filter } = useArray([
    1, 2, 3, 4, 5, 6,
  ])
  return (
    <div>
      <div>{numberArray.join(",")}</div>
      <button onClick={() => push(7)}>add 7</button>
      <button onClick={() => update(1, 9)}>change second element to 9</button>
      <button onClick={() => remove(1)}>Remove second element</button>
      <button onClick={() => filter((n) => n < 4)}>
        Keep numbers less than 4
      </button>
      <button onClick={() => set([1, 2])}>set to 1,2 </button>
      <button onClick={clear}>clear</button>
    </div>
  )
}
