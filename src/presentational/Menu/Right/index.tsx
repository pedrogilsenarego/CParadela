import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  hover,
  projectFiltering,
} from "../../../slicer/general/general.actions";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { State } from "../../../slicer/types";
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
              <CgMathPlus size='2em' onClick={handleFilter} />
            ) : (
              <CgMathMinus size='2em' onClick={handleFilter} />
            )}
          </>
        ) : (
          <CgMathMinus size='2em' onClick={() => navigate(ROUTE_PATHS.HOME)} />
        )}
      </Grid>
    </Grid>
  );
};

export default Right;
