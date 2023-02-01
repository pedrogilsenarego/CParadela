import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Limits } from "./constants";

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



  // const triangleLeft = () => (
  //   <Box
  //     style={{
  //       width: 0,
  //       height: 0,
  //       borderTop: "10px solid transparent",
  //       borderRight: "20px solid red",
  //       borderBottom: "10px solid transparent",
  //     }}
  //   />
  // );

  // const triangleRight = () => (
  //   <Box
  //     style={{
  //       width: 0,
  //       height: 0,
  //       borderTop: "10px solid transparent",
  //       borderLeft: "20px solid red",
  //       borderBottom: "10px solid transparent",
  //     }}
  //   />
  // );

  const borderCondition =
    (positionPercentageX < Limits.LIMIT_MOUSE_LEFT &&
      positionPercentageY < Limits.LIMIT_MOUSE_TOP &&
      positionPercentageY > Limits.LIMIT_MOUSE_BOTTOM) ||
    (positionPercentageX > Limits.LIMIT_MOUSE_RIGHT &&
      positionPercentageY < Limits.LIMIT_MOUSE_TOP &&
      positionPercentageY > Limits.LIMIT_MOUSE_BOTTOM);

  const topCondition =
    positionPercentageY < Limits.LIMIT_MOUSE_BOTTOM && positionPercentageX > Limits.LIMIT_MOUSE_RIGHT

  return (
    <Box

      style={{
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 1000,
        border: borderCondition ? "solid 7px yellow" : "solid 0px blue",
        height: borderCondition || topCondition ? "40px" : "15px",
        width: borderCondition || topCondition ? "40px" : "15px",
        borderRadius: topCondition ? "0px" : "50px",
        backgroundColor: borderCondition ? "transparent" : "#E3EE31CC",
        color: "red",
        transition: "scale 2s ease-in-out",
        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
      }}
    >
      {/* {positionPercentageX > 85 &&
        positionPercentageY < 70 &&
        positionPercentageY > 30 &&
        (triangleRight())}
      {positionPercentageX < 15 &&
        positionPercentageY < 70 &&
        positionPercentageY > 30 &&
        (triangleLeft())} */}
    </Box>
  );
};

export default ProjectCursor;
