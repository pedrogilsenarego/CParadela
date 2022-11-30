import UpScroller from "../presentational/UpScroller";
import Header from "../presentational/Menu";
import Footer from "../presentational/Footer";
import { Grid } from "@mui/material";

const HomepageLayout = (props: any) => {
  return (
    <>
      <UpScroller />
      <Grid
        container
        direction='column'
        justifyContent='space-between'
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>

          <Header />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            minHeight: "60vh",
            textAlign: "center",
            marginTop: "6vh",
            marginBottom: "15vh",
          }}
        >
          {props.children}
        </Grid>

        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default HomepageLayout;
