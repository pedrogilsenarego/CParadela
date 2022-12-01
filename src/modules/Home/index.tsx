import { Grid, useTheme, useMediaQuery } from "@mui/material";
import CardMedia from "../../components/CardMedia";
import { projects, references } from "../../assets/content/projects";
import { useSelector } from "react-redux";
import { State } from "../../slicer/types";


const Home = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const extraLarge = useMediaQuery(Theme.breakpoints.up(2000));

  const filteringSignal = useSelector<State>(
    (state) => state.general.projectFiltering || false
  );

  const list = filteringSignal ? projects : projects.concat(references)


  return (
    <>
      <div
        style={{
          justifyContent: "center",
          marginLeft: mobile ? "20px" : "80px",
          marginRight: mobile ? "20px" : "80px",
        }}
      >
        <Grid
          container
          columnSpacing={mobile ? "20px" : "40px"}
          rowSpacing={mobile ? "20px" : "40px"}
          alignItems='center'
        >
          {list.map((item, pos) => {
            return (
              <Grid item xs={6} md={4} xl={extraLarge ? 2.4 : 3}>
                <CardMedia image={item.mainImage} key={pos} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default Home;
