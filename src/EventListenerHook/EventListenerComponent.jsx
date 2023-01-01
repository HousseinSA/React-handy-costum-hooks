import { useState } from "react"
import useEventListner from "./useEventListner"

export default function EventListenerComponent() {
  const [key, setKey] = useState()
  useEventListner("keypress", (e) => setKey(e.key))

  return <div>Last Key: {key}</div>
}
