import { projects } from "../../assets/content/projects";
import { useParams, useNavigate } from "react-router";
import { Typography, useMediaQuery, useTheme, Box } from "@mui/material";
import { useState } from "react";
import { ProjectImages } from "../../assets/content/types";
import { Limits } from "../../presentational/Cursor/ProjectCursor/constants";
import { ROUTE_PATHS } from "../../constants/routes";



const Project = () => {
  const { id } = useParams();
  const Theme = useTheme();
  const navigate = useNavigate()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const [slide, setSlide] = useState(0);

  const handleGoRight = () => {
    if (projects[Number(id)].projectImages.length > slide + 1)
      setSlide(slide + 1);
    else return;
  };

  const handleGoLeft = () => {
    if (slide > 0) setSlide(slide - 1);
    else return;
  };

  type Styles = React.CSSProperties & {
    '@media (max-height: 300px)': React.CSSProperties;
    '@media (max-height: 600px)': React.CSSProperties;

  };

  const styles: Styles = {
    columnCount: 1,
    maxHeight: "300px",
    columnGap: "40px",
    textAlign: "left",
    maxWidth: "25vw",
    margin: "5vw",
    '@media (max-height: 300px)': {
      columnCount: 2,
    },
    '@media (max-height: 600px)': {
      columnCount: 3,
    },

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
      {projects[Number(id)].projectImages[slide].type ===
        ProjectImages.IMAGE ? (
        <img
          style={{
            height: mobile ? "auto" : "100vh",
            maxWidth: "100%",
            objectFit: "cover",
          }}
          src={projects[Number(id)].projectImages[slide].image}
          alt={projects[Number(id)].title}
          loading='lazy'
        />
      ) : (
        <Box
          style={styles}
        >
          <Typography>
            {projects[Number(id)].projectImages[slide].text}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Project;
