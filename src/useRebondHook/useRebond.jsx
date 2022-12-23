import { useEffect } from "react"
import useTimeout from "../useTimeoutHook/useTimeout"

export default function useRebond(count, delay, counts) {
  const { clear, reset } = useTimeout(count, delay)
  useEffect(reset, [counts, reset])
  useEffect(clear, [])
}
