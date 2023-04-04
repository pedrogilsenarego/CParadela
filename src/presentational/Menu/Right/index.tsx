import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  hover,
  projectFiltering,
} from "../../../slicer/general/general.actions";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { State } from "../../../slicer/types";
import { RxCross1 } from "react-icons/rx"
import { ROUTE_PATHS } from "../../../constants/routes";

const Right = () => {
  const filteringSignal = useSelector<State>(
    (state) => state.general.projectFiltering || false
  );
  const navigate = useNavigate();
  const handleFilter = () => {
    if (!filteringSignal) {
      dispatch(projectFiltering(true));
    } else dispatch(projectFiltering(false));
  };

  const dispatch = useDispatch();
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const location = useLocation();

  return (
    <Grid
      container
      alignItems='center'
      justifyContent={mobile ? "center" : "start"}
      style={{ paddingTop: "5px" }}
    >
      <Grid
        item
        onMouseEnter={() => dispatch(hover(true))}
        onMouseLeave={() => dispatch(hover(false))}
      >
        {location.pathname === ROUTE_PATHS.HOME ? (
          <>
            {filteringSignal ? (
              <Box
                onClick={handleFilter}
                display='flex'
                justifyContent='center'
                alignItems='center'
                style={{ width: "40px", height: "40px" }}
              >
                <CgMathPlus size='2em' />
              </Box>
            ) : (
              <Box
                onClick={handleFilter}
                display='flex'
                justifyContent='center'
                alignItems='center'
                style={{ width: "40px", height: "40px" }}
              >
                <CgMathMinus size='2em' /></Box>
            )}
          </>
        ) : (
          <Box
            onClick={() => navigate(ROUTE_PATHS.HOME)}
            display='flex'
            justifyContent='center'
            alignItems='center'
            style={{ width: "40px", height: "40px" }}
          ><RxCross1 size='2em' /></Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Right;
