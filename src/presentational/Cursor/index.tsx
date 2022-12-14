import { useEffect, useState } from "react"
import { motion } from "framer-motion"






const Cursor = () => {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  useEffect(() => {
    const mouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      backgroundColor: "blue"
    },

  }

  return (
    <motion.div
      variants={variants}
      animate="default"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 1000,
        height: "20px",
        width: "20px",
        borderRadius: "50px",
        backgroundColor: "yellow",
      }}
    />
  )
}

export default Cursor