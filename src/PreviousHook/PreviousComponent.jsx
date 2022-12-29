import { useState } from "react"
import usePrevious from "./usePrevious"

export default function PreviousComponent() {
  const [name, setName] = useState("hussein")
  const [count, setCount] = useState(0)
  const previousCount = usePrevious(count)
  return (
    <>
      <div>
        {count} - {previousCount}
      </div>
      <dir>{name}</dir>
      <button onClick={() => setCount((e) => e + 1)}>Increment</button>
      <button onClick={() => setName("Neji")}>Change name</button>
    </>
  )
}
