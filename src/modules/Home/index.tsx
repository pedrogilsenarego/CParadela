import { Grid, useTheme, useMediaQuery } from "@mui/material";
import CardMedia from "../../components/CardMedia";
import { projects, references } from "../../assets/content/projects";
import { useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { shuffleArray } from "../../utils/shuffleArray";
import { useMemo } from "react";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../constants/routes";

const Home = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const extraLarge = useMediaQuery(Theme.breakpoints.up(2000));

  const navigate = useNavigate();

  const filteringSignal = useSelector<State>(
    (state) => state.general.projectFiltering || false
  );

  const list = projects.concat(references);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const shuffledArray = useMemo(() => shuffleArray(list), []);
  const filteredArray = filteringSignal
    ? shuffledArray.filter((obj) => {
      return obj.type === "project";
    })
    : shuffledArray;

  const handleClick = (type: string, id: number) => {
    if (type === "project") {
      navigate(
        ROUTE_PATHS.PROJECT.replace(":id", id.toString())
      )
    }
    else {
      navigate(
        ROUTE_PATHS.REFERENCES
      )
    }
  }

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
          {filteredArray.map((item, pos) => {
            return (
              <Grid
                item
                key={pos}
                xs={6}
                md={4}
                xl={extraLarge ? 2.4 : 3}
                onClick={() => handleClick(item.type, item.id)}>

                <CardMedia
                  image={item.projectImages[0].image}
                  title={item.title}
                  key={pos}
                />

              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default Home;
