
import useWindowSize from "./useWindowSize"

export default function WindowSizeComponent() {
  const { widht, height } = useWindowSize()
  return (
    <div>
      {widht} x {height}
    </div>
  )
}
