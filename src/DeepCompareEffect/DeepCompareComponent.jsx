import React from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import useDeepComareEffect from "./useDeepComareEffect"

export default function DeepCompareComponent() {
  const [age, setAge] = useState(0)
  const [otherCount, setOtherCount] = useState(0)
  const useEffectRef = useRef()
  const useDeepEffect = useRef()
  const person = { age: age, name: "Hussein" }
  console.log(useEffectRef.current)
  useEffect(() => {
    useEffectRef.current.textContent =
      parseInt(useEffectRef.current.textContent) + 1
  }, [person])
  useDeepComareEffect(() => {
    useDeepEffect.current.textContent =
      parseInt(useDeepEffect.current.textContent) + 1
  }, [person])
  return (
    <>
      <div>
        useffect: <span ref={useEffectRef}>0</span>
      </div>
      <div>
        useDeepEffect: <span ref={useDeepEffect}>0</span>
      </div>
      <div>Other Count : {otherCount}</div>
      <div>{JSON.stringify(person)}</div>
      <button onClick={() => setAge((e) => e + 1)}>age</button>
      <button onClick={() => setOtherCount((e) => e + 1)}>
        increase other count
      </button>
    </>
  )
}
