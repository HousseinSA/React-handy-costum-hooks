// import { useCallback, useRef, useEffect } from "react"

// export default function useTimeout(count, delay) {
//   const countRef = useRef(count)
//   const timeoutRef = useRef()
//   useEffect(() => {
//     countRef.current = count
//   }, [count])
//   const set = useCallback(() => {
//     timeoutRef.current = setTimeout(() => countRef.current(), delay)
//   }, [delay])
//   const clear = useCallback(() => {
//     timeoutRef.current && clearTimeout(timeoutRef.current)
//   }, [])
//   useEffect(() => {
//     set()
//     return clear
//   }, [delay, set, clear])
//   const reset = useCallback(() => {
//     clear()
//     set()
//   }, [clear, set])
//   return { reset, clear }
// }

import { useCallback } from "react"
import { useEffect } from "react"
import { useRef } from "react"
export default function useTimeout(callback, delay) {
  const countRef = useRef(callback)
  const timeOutRef = useRef()
  useEffect(() => {
    countRef.current = callback
  }, [callback])
  const set = useCallback(() => {
    timeOutRef.current = setTimeout(() => countRef.current(), delay)
  }, [delay])
  const clear = useCallback(() => {
    timeOutRef.current && clearTimeout(timeOutRef.current)
  }, [])
  useEffect(() => {
    set()
    return clear
  }, [clear, set, delay])
  const reset = useCallback(() => {
    clear()
    set()
  }, [set, clear])
  return { clear, reset }
}
