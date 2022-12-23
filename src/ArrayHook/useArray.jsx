import { useState } from "react"
import { useEffect } from "react"

export default function useArray(array) {
  const [numberArray, setNumberArray] = useState(array)
  const push = (number) => {
    setNumberArray((a) => [...a, number])
  }
  const set = (number) => {
    setNumberArray((e) => [number])
  }

  const clear = () => {
    setNumberArray([])
  }
  const remove = (index) => {
    setNumberArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length),
    ])
  }
  const filter = (number) => {
    setNumberArray((a) => a.filter(number))
  }
  const update = (index, number) => {
    setNumberArray((a) => [
      ...a.slice(0, index),
      number,
      ...a.slice(index + 1, a.length),
    ])
  }

  //  set, update, shift, clear, remove, filter
  return { numberArray, push, set, clear, remove, filter, update }
}
