import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const ProjectCursor = () => {


  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const positionPercentageX = (mousePosition.x / windowSize.innerWidth) * 100;
  const positionPercentageY = (mousePosition.y / windowSize.innerHeight) * 100;

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

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

  const triangleLeft = () => (
    <Box
      style={{
        width: 0,
        height: 0,
        borderTop: "10px solid transparent",
        borderRight: "20px solid red",
        borderBottom: "10px solid transparent"
      }}
    />
  );

  const triangleRight = () => (
    <Box
      style={{
        width: 0,
        height: 0,
        borderTop: "10px solid transparent",
        borderLeft: "20px solid red",
        borderBottom: "10px solid transparent"
      }}
    />
  );



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
          (positionPercentageX > 85 &&
            positionPercentageY < 70 &&
            positionPercentageY > 30) ||
            (positionPercentageX < 15 &&
              positionPercentageY < 70 &&
              positionPercentageY > 30)
            ? "40px"
            : "20px",
        width:
          (positionPercentageX > 85 &&
            positionPercentageY < 70 &&
            positionPercentageY > 30) ||
            (positionPercentageX < 15 &&
              positionPercentageY < 70 &&
              positionPercentageY > 30)
            ? "40px"
            : "20px",
        borderRadius: "50px",
        backgroundColor: "#E3EE31CC",
        color: "red",
        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
      }}
    >

      {positionPercentageX > 85 &&
        positionPercentageY < 70 &&
        positionPercentageY > 30 &&
        (triangleRight())}
      {positionPercentageX < 15 &&
        positionPercentageY < 70 &&
        positionPercentageY > 30 &&
        (triangleLeft())}

    </Box>
  );
};

export default ProjectCursor;
