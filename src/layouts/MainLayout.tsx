import Header from "../presentational/Menu";
import { Grid } from "@mui/material";
import Cursor from "../presentational/Cursor";

const HomepageLayout = (props: any) => {
  return (
    <>


      <Grid
        container
        direction='column'

        style={{ minHeight: "100vh" }}
      >
        <Grid item >

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


      </Grid>
    </>
  );
};

export default HomepageLayout;
