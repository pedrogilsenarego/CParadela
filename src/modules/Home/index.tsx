import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { projects, references } from "../../assets/content/projects";
import CardMedia from "../../components/CardMedia";
import { ROUTE_PATHS } from "../../constants/routes";
import { hover } from "../../slicer/general/general.actions";
import { State } from "../../slicer/types";
import { shuffleArray } from "../../utils/shuffleArray";

const Home = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const extraLarge = useMediaQuery(Theme.breakpoints.up(2000));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteringSignal = useSelector<State>(
    (state) => state.general.projectFiltering || false
  );

  const lang = useSelector<State, string>((state) => state.general.lang);

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
      navigate(ROUTE_PATHS.PROJECT.replace(":id", id.toString()));
    } else {
      navigate(ROUTE_PATHS.REFERENCES.replace(":id", id.toString()));
    }
  };

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
          alignItems="center"
        >
          {filteredArray.map((item, pos) => {
            return (
              <Grid
                item
                key={pos}
                xs={6}
                md={4}
                xl={extraLarge ? 2.4 : 3}
                onClick={() => {
                  handleClick(item.type, item.id);
                  dispatch(hover(false));
                }}
                style={{ aspectRatio: 1 }}
              >
                <CardMedia
                  image={item.projectImages[0].image}
                  title={lang === "PT" ? item.title : item.titleEN}
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
