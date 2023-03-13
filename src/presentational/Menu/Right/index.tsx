import { Grid, useMediaQuery, useTheme } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
  hover,
  projectFiltering,

} from "../../../slicer/general/general.actions";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { State } from "../../../slicer/types";

const Right = () => {



  const filteringSignal = useSelector<State>(
    (state) => state.general.projectFiltering || false
  );


  const handleFilter = () => {
    if (!filteringSignal) {
      dispatch(projectFiltering(true));
    } else dispatch(projectFiltering(false));
  };

  const dispatch = useDispatch();
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <Grid container alignItems="center" justifyContent={mobile ? "center" : "start"} style={{ paddingTop: "5px" }}>
      <Grid item onMouseEnter={() => dispatch(hover(true))}
        onMouseLeave={() => dispatch(hover(false))}>
        {filteringSignal ? (
          <CgMathPlus
            size='2em'

            onClick={handleFilter}
          />
        ) : (
          <CgMathMinus
            size='2em'

            onClick={handleFilter}
          />
        )}
      </Grid>

    </Grid>
  );
};

export default Right;
