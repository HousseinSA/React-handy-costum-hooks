import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import useScript from "./useScript"

export default function ScriptComponent() {
  const { loading, error } = useScript(
    "https://code.jquery.com/jquery-3.6.3.min.js"
  )

  if (loading) return <div>Loading</div>
  if (error) return <div>error</div>

  return <div>{window.$(window).width()}</div>
}
