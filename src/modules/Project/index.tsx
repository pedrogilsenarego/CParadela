import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { projects } from "../../assets/content/projects";
import { ProjectImage } from "../../assets/content/types";
import { ROUTE_PATHS } from "../../constants/routes";
import { useKeyPress } from "../../hooks/useKeyPress";
import { Limits } from "../../presentational/Cursor/ProjectCursor/constants";
import { firstSlide } from "../../slicer/general/general.actions";
import { State } from "../../slicer/types";
import DynamicColumnsBox from "./DinamicText";

const Project = () => {
  const { id } = useParams();
  const Theme = useTheme();
  const lang = useSelector<State, string>((state) => state.general.lang);
  const navigate = useNavigate();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const [slide, setSlide] = useState(0);
  const [firstTime, setFirstTime] = useState(true);
  const dispatch = useDispatch();
  const firstSlidea = useSelector<State>(
    (state) => state.general.firstSlide || false
  );

  const leftButton = useKeyPress("ArrowLeft");
  const rightButton = useKeyPress("ArrowRight");
  const escButton = useKeyPress("Escape");

  useEffect(() => {
    if (slide === 0 && firstTime) {
      dispatch(firstSlide(true));
      return;
    }
    if (slide !== 0 && !firstSlidea) return;
    dispatch(firstSlide(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide]);

  useEffect(() => {
    if (leftButton) handleGoLeft();
    if (rightButton) handleGoRight();
    if (escButton) backHome();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftButton, rightButton, escButton]);

  const backHome = () => {
    navigate(ROUTE_PATHS.HOME);
  };

  const handleGoRight = () => {
    if (projects[Number(id)].projectImages.length > slide + 1)
      setSlide(slide + 1);
    else {
      setSlide(0);
      setFirstTime(false);
    }
  };

  const handleGoLeft = () => {
    if (slide > 0) setSlide(slide - 1);
    else if (!firstTime)
      setSlide(projects[Number(id)].projectImages.length - 1);
    else return;
  };

  const mobileRender = () => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        rowGap={2}
        style={{ margin: "20px" }}
      >
        {projects[Number(id)].projectImages.map((item: any, pos: number) => {
          return item.type === ProjectImage.IMAGE ? (
            <Box key={pos}>
              <img
                style={{
                  height: mobile ? "auto" : "100vh",
                  width: "100%",
                  objectFit: "cover",
                }}
                src={item.image}
                alt={item.image}
                loading="lazy"
              />
            </Box>
          ) : (
            <Box style={{ textAlign: "left" }}>
              <Typography>{item.text}</Typography>
            </Box>
          );
        })}
      </Box>
    );
  };

  return mobile ? (
    mobileRender()
  ) : (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="start"
      style={{
        height: "100vh",
      }}
    >
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
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          zIndex: 5000,
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          onClick={handleGoLeft}
          alignItems="center"
          style={{
            width: slide === 0 && firstTime ? 0 : `${Limits.LIMIT_MOUSE_LEFT}%`,
            height: `${Limits.LIMIT_MOUSE_TOP - Limits.LIMIT_MOUSE_BOTTOM}%`,
          }}
        />
        <Box
          onClick={handleGoRight}
          display="flex"
          alignItems="center"
          style={{
            width: `${Limits.LIMIT_MOUSE_LEFT}%`,
            height: `${Limits.LIMIT_MOUSE_TOP - Limits.LIMIT_MOUSE_BOTTOM}%`,
          }}
        />
      </Box>
      {projects[Number(id)].projectImages[slide].type === ProjectImage.IMAGE ? (
        <img
          style={{
            height: mobile ? "auto" : "100vh",
            width: "100%",
            objectFit: "contain",
          }}
          src={projects[Number(id)].projectImages[slide].image}
          alt={projects[Number(id)].title}
          loading="lazy"
        />
      ) : (
        <DynamicColumnsBox
          handleGoLeft={handleGoLeft}
          handleGoRight={handleGoRight}
          id={id}
          projects={projects}
          lang={lang}
          slide={slide}
        />
      )}
    </Box>
  );
};

export default Project;
