import { useEffect, useRef } from "react"

export default function useEventListner(type, chagingValue, element = window) {
  const TypeRef = useRef()
  useEffect(() => {
    TypeRef.current = type
  }, [type])

  useEffect(() => {
    const changingValueFunction = (e) => chagingValue(e)
    element.addEventListener(TypeRef.current, chagingValue)
    return () => element.removeEventListener(TypeRef.current, chagingValue)
  }, [element, chagingValue])
}
