import { Grid, Box } from "@mui/material";
import { useState } from "react";
import { ROUTE_PATHS } from "../constants/routes";
import Cursor from "../presentational/Cursor";
import { useNavigate } from "react-router";



const ProjectLayout = (props: any) => {
  const navigate = useNavigate()
  const [closeHover, setCloseHover] = useState(false)




  return (
    <>


      <Box
        onMouseEnter={() => setCloseHover(true)}
        onMouseLeave={() => setCloseHover(false)}
        onClick={() => navigate(ROUTE_PATHS.HOME)}
        style={{
          position: "absolute",
          right: "20px",
          top: "20px",
          height: "30px",
          width: "30px",
          borderRadius: "50px",
          backgroundColor: closeHover ? "darkBlue" : "black",
          //cursor: "pointer"
        }}
      />

      <Grid
        container
        direction='column'
        justifyContent='space-between'
        style={{ minHeight: "100vh" }}
      >
        <Grid
          item
          xs={12}
          style={{
            minHeight: "60vh",
            textAlign: "center",
          }}
        >
          {props.children}
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectLayout;
