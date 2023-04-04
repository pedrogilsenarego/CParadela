
import { useMediaQuery, useTheme } from "@mui/material";
import Menu from "../presentational/Menu"

const ProjectLayout = (props: any) => {
  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  return (
    <>
      {mobile && <Menu />}
      {props.children}

    </>
  );
};

export default ProjectLayout;
