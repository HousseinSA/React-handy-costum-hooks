import { useEffect, useRef } from "react"

export default function useEventListner(type, chagingValue, element ) {
  const TypeRef = useRef()
  useEffect(() => {
    TypeRef.current = type
  }, [type])
console.log(element)
  useEffect(() => {
    const elementChange = element
    elementChange.addEventListener(TypeRef.current, chagingValue)
    return () => element.removeEventListener(TypeRef.current, chagingValue)
  }, [element, chagingValue])
}
