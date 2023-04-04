import Header from "../presentational/Menu";
import { Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { hover } from "../slicer/general/general.actions";

const HomepageLayout = (props: any) => {
  const dispatch = useDispatch();

  return (
    <>
      <Grid
        container
        direction='column'
        textAlign='center'
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
          fontSize='0.6rem'
          mt='100px'
          mb='15px'
          style={{ cursor: "pointer" }}
        >
          Web projects&nbsp;&#183;&nbsp;Pedro Sena Rego
        </Typography>
      </Grid>
    </>
  );
};

export default HomepageLayout;
