import { useState, useEffect } from "react"

export default function useOneScreen(headerTwo, rootMargin = "0px") {
  const [isVisble, setIsvisble] = useState(false)
  useEffect(() => {
    if (headerTwo.current === null) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsvisble(entry.isIntersecting),
      { rootMargin }
    )
    observer.observe(headerTwo.current)
  }, [rootMargin, headerTwo])
  return isVisble
}
