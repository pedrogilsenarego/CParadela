import { projects } from "../../assets/content/projects";
import { useParams, useNavigate } from "react-router";
import { Typography, useMediaQuery, useTheme, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ProjectImages } from "../../assets/content/types";
import { Limits } from "../../presentational/Cursor/ProjectCursor/constants";
import { ROUTE_PATHS } from "../../constants/routes";
import { useKeyPress } from "../../hooks/useKeyPress";

const Project = () => {
  const { id } = useParams();
  const Theme = useTheme();
  const navigate = useNavigate();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const [slide, setSlide] = useState(0);

  const leftButton = useKeyPress("ArrowLeft");
  const rightButton = useKeyPress("ArrowRight");
  const escButton = useKeyPress("Escape");

  useEffect(() => {
    if (leftButton) handleGoLeft()
    if (rightButton) handleGoRight()
    if (escButton) backHome()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftButton, rightButton, escButton])

  const backHome = () => {
    navigate(ROUTE_PATHS.HOME)
  }

  const handleGoRight = () => {
    if (projects[Number(id)].projectImages.length > slide + 1)
      setSlide(slide + 1);
    else return;
  };

  const handleGoLeft = () => {
    if (slide > 0) setSlide(slide - 1);
    else return;
  };

  const mobileRender = () => {
    return (
      <Box display="flex" flexDirection="column" rowGap={2} style={{ margin: "20px" }}>
        {projects[Number(id)].projectImages.map((item, pos) => {
          return (
            item.type ===
              ProjectImages.IMAGE ? (
              <Box key={pos}>
                <img

                  style={{
                    height: mobile ? "auto" : "100vh",
                    width: "100%",
                    objectFit: "cover",

                  }}
                  src={item.image}
                  alt={item.image}
                  loading='lazy'
                />
              </Box>) :
              <Box
                style={{ textAlign: "justify", }}
              >
                <Typography>
                  {item.text}
                </Typography>
              </Box>
          )
        })}</Box>
    )
  }

  return (
    mobile ? mobileRender() :
      <Box
        display='flex'
        alignItems='center'
        justifyContent='start'
        style={{
          height: "100vh",
        }}>
        <Box
          onClick={backHome}
          style={{

            position: "absolute",
            left: `${Limits.LIMIT_MOUSE_RIGHT}%`,
            top: 0,
            width: `${Limits.LIMIT_MOUSE_RIGHT - Limits.LIMIT_MOUSE_LEFT}%`,
            height: `${Limits.LIMIT_MOUSE_BOTTOM}%`,
            zIndex: 5001,

          }}
        ></Box>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          style={{
            zIndex: 5000,
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
        {
          projects[Number(id)].projectImages[slide].type ===
            ProjectImages.IMAGE ? (
            <img
              style={{
                height: mobile ? "auto" : "100vh",
                width: "100%",
                objectFit: "cover",

              }}
              src={projects[Number(id)].projectImages[slide].image}
              alt={projects[Number(id)].title}
              loading='lazy'
            />
          ) : (
            <Box
              style={{
                columnCount: 1,
                maxHeight: "400px",
                columnGap: "40px",
                textAlign: "left",
                maxWidth: "25vw",
                margin: "5vw",
              }}
            >
              <Typography>
                {projects[Number(id)].projectImages[slide].text}
              </Typography>
            </Box>
          )
        }
      </Box >
  );
};

export default Project;
