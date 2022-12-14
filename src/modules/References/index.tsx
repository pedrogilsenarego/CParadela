import { references } from "../../assets/content/projects";
import { useNavigate } from "react-router";
import { useMediaQuery, useTheme, Box } from "@mui/material";
import { useState } from "react";
import { Limits } from "../../presentational/Cursor/ProjectCursor/constants";
import { ROUTE_PATHS } from "../../constants/routes";



const References = () => {
  const Theme = useTheme();
  const navigate = useNavigate()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const [slide, setSlide] = useState(0);

  const handleGoRight = () => {
    if (references.length > slide + 1)
      setSlide(slide + 1);
    else return;
  };

  const handleGoLeft = () => {
    if (slide > 0) setSlide(slide - 1);
    else return;
  };

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='start'
      style={{
        height: "100vh",
      }}
    >
      <Box
        onClick={() => navigate(ROUTE_PATHS.HOME)}
        style={{
          position: "absolute",
          left: `${Limits.LIMIT_MOUSE_LEFT}%`,
          top: 0,
          width: `${Limits.LIMIT_MOUSE_RIGHT - Limits.LIMIT_MOUSE_LEFT}%`,
          height: `${Limits.LIMIT_MOUSE_BOTTOM}%`,
          zIndex: 5000

        }}
      ></Box>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        style={{
          zIndex: 500,
          position: "absolute",

          width: "100%",
          height: "100%",
        }}
      >
        <Box
          onClick={handleGoLeft}
          alignItems='center'
          style={{
            width: `${Limits.LIMIT_MOUSE_LEFT}%`,
            height: `${Limits.LIMIT_MOUSE_TOP - Limits.LIMIT_MOUSE_BOTTOM}%`,
          }}
        />
        <Box
          onClick={handleGoRight}
          display='flex'
          alignItems='center'
          style={{
            width: `${Limits.LIMIT_MOUSE_LEFT}%`,
            height: `${Limits.LIMIT_MOUSE_TOP - Limits.LIMIT_MOUSE_BOTTOM}%`,
          }}
        />
      </Box>
      <img
        style={{
          height: mobile ? "auto" : "100vh",
          minWidth: "100%",
          objectFit: "cover",
        }}
        src={references[slide].projectImages[0].image}
        alt={references[slide].title}
        loading='lazy'
      />
    </Box>
  );
};

export default References;
