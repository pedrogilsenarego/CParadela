import { projects } from "../../assets/content/projects";
import { useParams } from "react-router";
import { Typography, useMediaQuery, useTheme, Box } from "@mui/material";
import { useState } from "react";
import { ProjectImages } from "../../assets/content/types";
import { Limits } from "../../presentational/Cursor/ProjectCursor/constants";

const Project = () => {
  const { id } = useParams();
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const [slide, setSlide] = useState(0);



  const handleGoRight = () => {
    if (projects[Number(id)].projectImages.length > slide + 1)
      setSlide(slide + 1);
    else return;
  }

  const handleGoLeft = () => {
    if (slide > 0)
      setSlide(slide - 1);
    else return;
  }

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
        display='flex'
        justifyContent='space-between'
        alignItems="center"
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
            minWidth: "100%",
            objectFit: "cover",
          }}
          src={projects[Number(id)].projectImages[slide].image}
          alt={projects[Number(id)].title}
          loading='lazy'


        />
      ) : (
        <Box
          style={{
            textAlign: "left",
            WebkitColumns: "250px 3",
            MozColumns: "250px 3",
            columns: "250px 3",
            margin: "20px",
          }}
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
