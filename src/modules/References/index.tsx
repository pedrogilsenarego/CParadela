import { references } from "../../assets/content/projects";
import { useNavigate, useParams } from "react-router";
import { useMediaQuery, useTheme, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Limits } from "../../presentational/Cursor/ProjectCursor/constants";
import { ROUTE_PATHS } from "../../constants/routes";
import { useKeyPress } from "../../hooks/useKeyPress";
import { shuffleArray } from "../../utils/shuffleArray";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { firstSlide } from "../../slicer/general/general.actions";



const References = () => {
  const { id } = useParams();
  const Theme = useTheme();
  const navigate = useNavigate()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const [slide, setSlide] = useState(0);
  const [referencesArrangement, setReferencesArrangement] = useState<any>([])
  const [firstTime, setFirstTime] = useState(true)
  const leftButton = useKeyPress("ArrowLeft");
  const rightButton = useKeyPress("ArrowRight");
  const escButton = useKeyPress("Escape");
  const dispatch = useDispatch()
  const firstSlidea = useSelector<State>(
    (state) => state.general.firstSlide || false
  );

  useEffect(() => {
    if (slide === 0 && firstTime) { dispatch(firstSlide(true)); return }
    if (slide !== 0 && !firstSlidea) return
    dispatch(firstSlide(false))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide])

  useEffect(() => {
    const newReferences = [...references]
    newReferences.splice(Number(id), 1)
    const newShuffle = shuffleArray([...newReferences])
    newShuffle.unshift(references[Number(id)])
    setReferencesArrangement(newShuffle)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



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
    if (referencesArrangement.length > slide + 1)
      setSlide(slide + 1);
    else { setSlide(0); setFirstTime(false) };
  };

  const handleGoLeft = () => {
    if (slide > 0) setSlide(slide - 1);
    else if (!firstTime) setSlide(referencesArrangement.length - 1);
    else return
  };

  const mobileRender = () => {
    return (
      <Box display="flex" flexDirection="column" rowGap={2} style={{ margin: "20px" }}>
        {referencesArrangement?.map((item: any, pos: number) => {
          console.log(item.projectImages)
          return (

            <Box key={pos}>
              <img

                style={{
                  height: mobile ? "auto" : "100vh",
                  width: "100%",
                  objectFit: "cover",

                }}
                src={item.projectImages[0].image}
                alt={item.projectImages[0].image}
                loading='lazy'
              />
            </Box>)

        })}
      </Box>
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
              width: slide === 0 && firstTime ? 0 : `${Limits.LIMIT_MOUSE_LEFT}%`,
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
          src={referencesArrangement[slide]?.projectImages[0]?.image}
          alt={referencesArrangement[slide]?.title}
          loading='lazy'
        />
      </Box>
  );
};

export default References;
