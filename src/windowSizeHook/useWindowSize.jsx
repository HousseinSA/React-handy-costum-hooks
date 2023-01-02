import { useState } from "react"
import useEventListner from "../EventListenerHook/useEventListner"

export default function useWindowSize() {
  const [windowResize, setWindowResize] = useState({
    widht: window.innerWidth,
    height: window.innerWidth,
  })
  useEventListner(
    "resize",
    () => {
      setWindowResize({
        widht: window.innerWidth,
        height: window.innerHeight,
      })
    },
    window
  )

  return windowResize
}
