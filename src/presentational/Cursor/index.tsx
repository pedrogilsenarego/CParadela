import { useLocation } from "react-router";
import { ROUTE_PATHS } from "../../constants/routes";
import ProjectCursor from "./ProjectCursor";
import GeneralCursor from "./GeneralCursor";

const Cursor = () => {
  const location = useLocation();
  console.log(location);
  return (location.pathname !== ROUTE_PATHS.HOME &&
    location.pathname !== ROUTE_PATHS.ABOUT) ? (
    <ProjectCursor />
  ) : (
    <GeneralCursor />
  );
};

export default Cursor;
