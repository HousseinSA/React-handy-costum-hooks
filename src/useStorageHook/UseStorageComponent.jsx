import React from "react"
import { useLocalStorage, useSession } from "./useStorage"

export default function UseStorageComponent() {
  const [name, setName, removeName] = useSession("Name", "Hussein")
  const [age, setAge, removeAge] = useLocalStorage("Age", 26)
  return (
    <>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("Neji")}>Change name </button>
      <button onClick={() => setAge(16)}>Change age </button>
      <button onClick={removeName}>Remove name </button>
      <button onClick={removeAge}> Remove age</button>
    </>
  )
}
