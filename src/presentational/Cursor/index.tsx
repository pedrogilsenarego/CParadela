import { useLocation } from "react-router";
import { ROUTE_PATHS } from "../../constants/routes";
import ProjectCursor from "./ProjectCursor";
import GeneralCursor from "./GeneralCursor";
import { useMediaQuery, useTheme } from "@mui/material";

const Cursor = () => {
  const location = useLocation();
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    mobile ? null :
      ((location.pathname !== ROUTE_PATHS.HOME &&
        location.pathname !== ROUTE_PATHS.ABOUT) ? (
        <ProjectCursor />
      ) : (
        <GeneralCursor />
      )))
};

export default Cursor;
