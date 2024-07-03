import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import "./index.css";

type Props = {
  lang: any;
  projects: any;
  id: any;
  slide: any;
  handleGoLeft: () => void;
  handleGoRight: () => void;
};

const DRAG_THRESHOLD = 5; // Adjust this threshold for sensitivity

const DynamicColumnsBox = ({
  lang,
  projects,
  id,
  slide,
  handleGoLeft,
  handleGoRight,
}: Props) => {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    if (scrollableRef.current) {
      scrollLeft.current = scrollableRef.current.scrollLeft;
    }
    e.preventDefault();
    e.stopPropagation();
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (Math.abs(e.clientX - startX.current) < DRAG_THRESHOLD) {
      handleClick(e.clientX); // Trigger click only if movement is within the threshold
    }
    setIsDragging(false);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollableRef.current) return;

    const x = e.clientX;
    const walk = (x - startX.current) * 2; // Adjust the multiplier for sensitivity
    scrollableRef.current.scrollLeft = scrollLeft.current - walk;
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClick = (clientX: number) => {
    if (!scrollableRef.current) return;

    const boxRect = scrollableRef.current.getBoundingClientRect();
    const boxWidth = boxRect.width;
    const clickPosition = clientX - boxRect.left;

    if (clickPosition <= boxWidth / 2) {
      handleGoLeft();
      // Handle left side click action
    } else {
      console.log("Clicked right!");
      handleGoRight();
    }
  };

  return (
    <Box
      className="custom-scrollbar"
      ref={scrollableRef}
      style={{
        columnCount: 4,
        columnWidth: "25vw",
        maxHeight: "400px",
        columnGap: "40px",
        textAlign: "left",
        position: "relative",
        margin: "5vw",
        overflowX: "auto",
        paddingBottom: "20px",
      }}
    >
      <Typography
        dangerouslySetInnerHTML={{
          __html:
            lang === "PT"
              ? projects[Number(id)]?.projectImages[slide]?.text
              : projects[Number(id)]?.projectImages[slide]?.textEN || "",
        }}
      />
      <Box
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          position: "absolute",
          height: "100%",
          zIndex: 1000000000,
          backgroundColor: "transparent",
          width: "100%",
          left: 0,
          bottom: 0,
        }}
      />
    </Box>
  );
};

export default DynamicColumnsBox;
