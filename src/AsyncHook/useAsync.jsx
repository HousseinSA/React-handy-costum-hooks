import { useEffect } from "react"
import { useCallback } from "react"
import { useState } from "react"

export default function useAsync(callback, dependecies = []) {
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState()
  const [error, setError] = useState()
  const callbackM = useCallback(() => {
    callback()
      .then(setValue)
      .catch((e) => setError(e))
      .finally(() => setLoading(false))
  },dependecies)
  useEffect(()=>{
    callbackM()
  },[callbackM])
  return {loading , value, error}
}
