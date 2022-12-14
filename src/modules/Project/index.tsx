import { projects } from "../../assets/content/projects";
import { useParams } from "react-router";
import {
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Container,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { ProjectImages } from "../../assets/content/types";

const Project = () => {
  const { id } = useParams();
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const [slide, setSlide] = useState(0);

  const handleClick = () => {
    if (projects[Number(id)].projectImages.length > slide + 1)
      setSlide(slide + 1);
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
          onClick={handleClick}
        />
      ) : (
        <Box
          style={{
            textAlign: "left",
            WebkitColumns: "250px 3",
            MozColumns: "250px 3",
            columns: "250px 3",
            margin: "20px"
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
