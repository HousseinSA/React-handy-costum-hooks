
import { useCallback } from "react"
import { useEffect } from "react"
import { useState } from "react"

export function useSession(key, defaultValue) {
  return useStorage(key, defaultValue, window.sessionStorage)
}
export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage)
}
function useStorage(key, defaultValue, ObjectStorage) {
  const [value, setValue] = useState(() => {
    const localValue = ObjectStorage.getItem(key)
    if (localValue != null) return JSON.parse(localValue)
    if (typeof shit === "function") {
      return defaultValue()
    } else {
      return defaultValue
    }
  })
  useEffect(() => {
    if (value === undefined)
      return ObjectStorage.removeItem(key)
    ObjectStorage.setItem(key , JSON.stringify(value))
  }, [key, value, ObjectStorage])
  const remove = useCallback(()=>{
    setValue(undefined)
  },[])
  return [value , setValue ,remove]
}
