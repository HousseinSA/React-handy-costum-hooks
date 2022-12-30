import React from "react"
import useAsync from "./useAsync"

export default function AsyncComponent() {
  const { loading, value, error } = useAsync(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = false
        success ? resolve("hell yeah") : reject("fuck")
      }, 1000)
    })
  })
  return (
    <>
      <div>Loading : {loading.toString()}</div>
      <div>{value}</div>
      <div>{error}</div>
    </>
  )
}
