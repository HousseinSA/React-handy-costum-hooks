import React from "react"
import useAsync from "../AsyncHook/useAsync"

export default function useFetch(url, option, dep) {
  const headerOption = {
    "Content-type": "applicaton/json",
  }
  return useAsync(() => {
    return fetch(url, { ...headerOption, option }).then((res) => {
      if (res.ok) return res.json()
      return res.json().then((json) => res.reject(json))
    })
  }, dep)
}
