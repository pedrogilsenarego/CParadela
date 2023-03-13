import { projects } from "../../assets/content/projects";
import { useParams, useNavigate } from "react-router";
import { Typography, useMediaQuery, useTheme, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ProjectImages } from "../../assets/content/types";
import { Limits } from "../../presentational/Cursor/ProjectCursor/constants";
import { ROUTE_PATHS } from "../../constants/routes";
import { useKeyPress } from "../../hooks/useKeyPress";
import { useDispatch, useSelector } from "react-redux";
import { firstSlide } from "../../slicer/general/general.actions";
import { State } from "../../slicer/types";

const Project = () => {
  const { id } = useParams();
  const Theme = useTheme();
  const navigate = useNavigate();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const [slide, setSlide] = useState(0);
  const dispatch = useDispatch()
  const firstSlidea = useSelector<State>(
    (state) => state.general.firstSlide || false
  );

  const leftButton = useKeyPress("ArrowLeft");
  const rightButton = useKeyPress("ArrowRight");
  const escButton = useKeyPress("Escape");

  useEffect(() => {
    if (slide === 0) { dispatch(firstSlide(true)); return }
    if (slide !== 0 && !firstSlidea) return
    dispatch(firstSlide(false))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide])

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
    else setSlide(0);
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
                style={{ textAlign: "left", }}
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
            right: 0,
            top: 0,
            width: `${Limits.LIMIT_MOUSE_WIDTH}%`,
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

              width: slide === 0 ? 0 : `${Limits.LIMIT_MOUSE_LEFT}%`,
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
