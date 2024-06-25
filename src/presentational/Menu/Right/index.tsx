import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  hover,
  projectFiltering,
} from "../../../slicer/general/general.actions";

import { State } from "../../../slicer/types";

import { ROUTE_PATHS } from "../../../constants/routes";
import { i18n } from "../../../translations/i18n";

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
    <Box
      style={{ padding: "10px" }}
      display={"flex"}
      alignItems="center"
      justifyContent={mobile ? "center" : "center"}
    >
      {location.pathname === ROUTE_PATHS.HOME && (
        <>
          {filteringSignal ? (
            <Typography
              mt="8px"
              onClick={handleFilter}
              fontSize="14px"
              fontWeight={800}
              style={{ textTransform: "lowercase" }}
            >
              {i18n.t("header.references")}
            </Typography>
          ) : (
            <Typography
              mt="8px"
              onClick={handleFilter}
              fontSize="14px"
              fontWeight={800}
              style={{ textTransform: "lowercase" }}
            >
              {i18n.t("header.projects")}
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};

export default Right;
