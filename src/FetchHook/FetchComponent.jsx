import React from "react"
import { useState } from "react"
import useFetch from "./useFetch"

export default function FetchComponent() {
  const[ id, setId ] = useState(1)
  const { loading, value, error } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  )
  return (
    <>
    <div>{id}</div>
      <div>Loading ={loading.toString()}</div>
      <button onClick={() => setId((prev) => prev + 1)}>increment </button>
      <div>{JSON.stringify(value)}</div>
      <div>{JSON.stringify(error)}</div>
    </>
  )
}
