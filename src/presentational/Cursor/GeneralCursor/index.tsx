import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../slicer/types";

const GeneralCursor = () => {

  const hover = useSelector<State>(
    (state) => state.general.hover || false
  );

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [mouseScroll, setMouseScroll] = useState<number>(0)
  const [invisible, setInvisible] = useState<boolean>(false)

  console.log(mousePosition.x)



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
      // if (mousePosition.x <= 10) { setInvisible(true) }
      // else setInvisible(false)
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);


  useEffect(() => {
    const scrollMove = () => {
      const position = window.pageYOffset;
      setMouseScroll(position);
    };
    window.addEventListener("scroll", scrollMove)
    return () => window.removeEventListener("scroll", scrollMove);
  }, [])


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
          "25px",
        width:
          "25px",
        borderRadius: "50px",
        transition: "background-color 0.08s ease-in-out",
        backgroundColor: invisible ? "transparent" : hover ? "#E3EE31CC" : "#255355bb",
        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y + mouseScroll}px, 0)`,
      }}
    />

  );
};

export default GeneralCursor;
