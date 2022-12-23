import { useState } from "react"

export default function useToggle(DefaultValue) {
  const [toggelValue, setToggleValue] = useState(DefaultValue)
  function handelToggle(toggelValue) {
    setToggleValue((current) =>
      typeof toggelValue === "boolean" ? toggelValue : !current
    )
  }
  return [toggelValue, handelToggle]
}
