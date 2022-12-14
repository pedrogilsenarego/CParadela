import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { ROUTE_PATHS } from "../constants/routes";
import { useNavigate } from "react-router";

const ProjectLayout = (props: any) => {
  const navigate = useNavigate();
  const [closeHover, setCloseHover] = useState(false);
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <>
      <Box

        onMouseEnter={() => setCloseHover(true)}
        onMouseLeave={() => setCloseHover(false)}
        onClick={() => navigate(ROUTE_PATHS.HOME)}
        style={{
          overflow: 'hidden',
          position: "absolute",
          right: "20px",
          top: "20px",
          height: "30px",
          width: "30px",
          zIndex: 700,
          borderRadius: "50px",
          marginRight: mobile ? "20px" : "80px",
          backgroundColor: closeHover ? "darkBlue" : "black",
        }}
      />

      <Box>{props.children}</Box>
    </>
  );
};

export default ProjectLayout;
