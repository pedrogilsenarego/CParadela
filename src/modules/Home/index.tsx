import { Container, Grid } from "@mui/material";
import CardMedia from "../../components/CardMedia";

const Home = () => {
  const listImages = [
    "https://talkstar-assets.s3.amazonaws.com/production/playlists/playlist_520/how_architecture_can_connect_us.jpg",
    "https://www.edx.org/static/bfb3565666d1bd78f05ff77f5c19057c/learn_architecture.jpg",
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/06/05a0d0341111e7b22543f93104171e/architecture-1992423_1920.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
    "https://static.kent.ac.uk/nexus/ems/1497.jpg",
    "https://payload.cargocollective.com/1/19/618130/12243704/17_-simplicity-day-details-Evangelia-Kiosse_670.jpg",
    "https://payload.cargocollective.com/1/19/618130/12243704/sim17_670.png",
    "https://i.pinimg.com/originals/5b/d8/30/5bd830f774fc4e9ffec26200d74b4b2e.jpg"

  ];

  return (
    <>
      <Container maxWidth='xl' style={{ justifyContent: "center" }}>
        <Grid container columnSpacing={10} rowSpacing={10} alignItems="center">
          {listImages.map((image, pos) => {
            return (
              <Grid item xs={3}>
                <CardMedia image={image} key={pos} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
