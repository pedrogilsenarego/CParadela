import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import Header from "../presentational/Menu";
import { hover } from "../slicer/general/general.actions";

const HomepageLayout = (props: any) => {
  const dispatch = useDispatch();
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <>
      <Grid
        container
        direction="column"
        textAlign="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Header />
        </Grid>
        <Grid
          item
          style={{
            minHeight: "60vh",
            textAlign: "center",
            marginTop: "5vh",
            marginBottom: "5vh",
          }}
        >
          {props.children}
        </Grid>
        <Typography
          onMouseEnter={() => dispatch(hover(true))}
          onMouseLeave={() => dispatch(hover(false))}
          fontSize="0.6rem"
          mt={mobile ? "20px" : "100px"}
          mb={mobile ? "25px" : "15px"}
          style={{
            cursor: "pointer",
            textTransform: "lowercase",
          }}
        >
          Web projects&nbsp;&#183;&nbsp;Pedro Sena Rego
        </Typography>
      </Grid>
    </>
  );
};

export default HomepageLayout;
