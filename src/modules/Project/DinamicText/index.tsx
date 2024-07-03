import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import "./index.css";

type Props = {
  lang: any;
  projects: any;
  id: any;
  slide: any;
};

const DynamicColumnsBox = ({ lang, projects, id, slide }: Props) => {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    if (scrollableRef.current) {
      scrollLeft.current = scrollableRef.current.scrollLeft;
    }
    e.preventDefault();
    e.stopPropagation();
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    isDragging.current = false;
    e.preventDefault();
    e.stopPropagation();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollableRef.current) return;

    const x = e.clientX;
    const walk = (x - startX.current) * 2; // Adjust the multiplier for sensitivity
    scrollableRef.current.scrollLeft = scrollLeft.current - walk;
    e.preventDefault();
    e.stopPropagation();
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
        onClick={() => {
          console.log("teste");
        }}
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
          border: "solid 2px black",
        }}
      />
    </Box>
  );
};

export default DynamicColumnsBox;
