import { useCallback } from "react"
import { useRef } from "react"
import { useState } from "react"

export default function useStateWithHistory(count, { capacity = 10 } = {}) {
  const [value, setValue] = useState(count)
  const historyRef = useRef([count])
  const pointerRef = useRef(0)
  const set = useCallback(
    (v) => {
      const changingValue = typeof v === "function" ? v(value) : v
      if (historyRef.current[pointerRef.current] !== changingValue) {
        if (pointerRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(pointerRef.current + 1)
        }
        while (historyRef.current.length > capacity) {
          historyRef.current.shift()
        }
        historyRef.current.push(changingValue)
        pointerRef.current = historyRef.current.length - 1
      }
      setValue(changingValue)
    },
    [value, capacity]
  )
  const forward = useCallback(() => {
    if (pointerRef.current <= 0) return
     pointerRef.current++
    setValue(historyRef.current[pointerRef.current])
  }, [])
  const backward = useCallback(() => {
    if (pointerRef.current <= 0) return 
    pointerRef.current--
    setValue(historyRef.current[pointerRef.current])
  }, [])
  const go = useCallback((index) => {
    index <= historyRef.current.length && setValue(historyRef.current[index])
    pointerRef.current = index
  }, [])

  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      backward,
      forward,
      go,
    },
  ]
}
