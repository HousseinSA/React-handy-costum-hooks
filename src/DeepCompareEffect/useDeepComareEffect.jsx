import { useEffect } from "react"
import { useRef } from "react"
import isEqual from "lodash/fp/isEqual"
export default function useDeepComareEffect(current, dep) {
  const currentDep = useRef()
  if (!isEqual(currentDep.current, dep)) {
    currentDep.current = current
  }
  useEffect(current, [currentDep.current])
}
