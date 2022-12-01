import { Container, Grid, useTheme, useMediaQuery } from "@mui/material";
import CardMedia from "../../components/CardMedia";
import { projects } from "../../assets/content/projects";

const Home = () => {
  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"))


  return (
    <>
      <div style={{ justifyContent: "center", marginLeft: mobile ? "20px" : "80px", marginRight: mobile ? "20px" : "80px" }}>
        <Grid container columnSpacing={mobile ? 3 : 10} rowSpacing={mobile ? 3 : 10} alignItems="center">
          {projects.map((image, pos) => {
            return (
              <Grid item xs={6} md={4} xl={3}>
                <CardMedia image={image} key={pos} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default Home;
