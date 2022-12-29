import { useRef } from "react"

export default function usePrevious(value) {
  const currentValue = useRef(value)
  const prevValue = useRef()
  if (currentValue.current !== value) {
    prevValue.current = currentValue.current
    currentValue.current = value
  }
  return prevValue.current
}
