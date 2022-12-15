import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const GeneralCursor = () => {


  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });






  useEffect(() => {
    const mouseMove = (e: {
      preventDefault: () => void;
      stopPropagation: () => void;
      clientX: any;
      clientY: any;
    }) => {
      e.preventDefault(); // Cancel the native event
      e.stopPropagation(); // Don't bubble/capture the event any further
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 1000,
        height:
          "20px",
        width:
          "20px",
        borderRadius: "50px",
        backgroundColor: "blue",
        color: "red",

        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
      }}
    />

  );
};

export default GeneralCursor;
