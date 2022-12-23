import React from "react"
import useToggle from "./useToggle"
export default function ToggleCustomHock() {
  const [toggelValue, handelToggle] = useToggle(true)
  return (
    <div>
      <p>{toggelValue.toString()}</p>
      <div className="button">
        <button onClick={handelToggle}>toggle</button>
        <button onClick={() => handelToggle(true)}>MakeTrue</button>
        <button onClick={() => handelToggle(false)}>MakeFalse</button>
      </div>
    </div>
  )
}
