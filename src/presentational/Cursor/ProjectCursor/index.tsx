import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../slicer/types";
import { Limits } from "./constants";

const ProjectCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const positionPercentageX = (mousePosition.x / windowSize.innerWidth) * 100;
  const positionPercentageY = (mousePosition.y / windowSize.innerHeight) * 100;

  const firstSlide = useSelector<State>(
    (state) => state.general.firstSlide || false
  );
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
        x: e.clientX - 12,
        y: e.clientY - 12,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);




  const leftCondition = (positionPercentageX < Limits.LIMIT_MOUSE_LEFT &&
    positionPercentageY < Limits.LIMIT_MOUSE_TOP &&
    positionPercentageY > Limits.LIMIT_MOUSE_BOTTOM) && !firstSlide

  const rightCondition = (positionPercentageX > Limits.LIMIT_MOUSE_RIGHT &&
    positionPercentageY < Limits.LIMIT_MOUSE_TOP &&
    positionPercentageY > Limits.LIMIT_MOUSE_BOTTOM)

  const borderCondition =
    leftCondition || rightCondition



  const topCondition =
    positionPercentageY < Limits.LIMIT_MOUSE_BOTTOM && positionPercentageX > 100 - Limits.LIMIT_MOUSE_WIDTH

  return (

    <Box

      style={{
        position: "absolute",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 1000,
        borderTop: borderCondition ? "15px solid transparent" : undefined,
        borderLeft: rightCondition ? "25px solid #E3EE31CC" : undefined,
        borderRight: leftCondition ? "25px solid #E3EE31CC" : undefined,
        borderBottom: borderCondition ? "15px solid transparent" : undefined,
        height: "25px",
        width: "25px",
        borderRadius: topCondition || borderCondition ? "0px" : "50%",
        backgroundColor: borderCondition ? "transparent" : "#E3EE31CC",
        transition: "scale 2s ease-in-out",
        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
      }}
    >
    </Box>
  );
};

export default ProjectCursor;





