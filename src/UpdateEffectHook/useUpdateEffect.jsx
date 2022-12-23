import { useEffect, useRef } from "react"
import useTimeout from "../useTimeoutHook/useTimeout"

export default function useUpdateEffect(count, counts) {
  const { clear, reset } = useTimeout(count, count)
  useEffect(reset, [counts, reset])
  useEffect(clear, [])
}
