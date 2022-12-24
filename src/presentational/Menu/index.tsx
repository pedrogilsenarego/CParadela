import {
  Box,
  Grid,
  Container,
  useTheme,
  useMediaQuery,

} from "@mui/material";
import Left from "./Left";
import Right from "./Right";

import { useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { useLocation } from "react-router";
import { ROUTE_PATHS } from "../../constants/routes";

const Menu = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  const location = useLocation();

  const lang = useSelector<State, string>(
    (state) => state.general.lang || "PT"
  );

  const laptopRender = () => {
    return (
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: mobile ? "20px" : "80px",
          marginRight: mobile ? "20px" : "80px",
        }}
      >
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          style={{ height: "80px" }}
        >
          <Grid item>
            <Left />
          </Grid>
          {location.pathname === ROUTE_PATHS.HOME && (
            <Grid item>
              <Right />
            </Grid>
          )}
        </Grid>
      </Box>
    );
  };

  const mobileRender = () => {
    return (
      <Box>
        <Container>
          <Grid
            container
            columnSpacing={1}
            justifyContent='start'
            alignItems='center'
            style={{ height: "80px" }}
          >
            <Grid item xs={11}>
              <Left />
            </Grid>
            <Grid item xs={1} textAlign='right'>
              {location.pathname === ROUTE_PATHS.HOME && (
                <Grid item>
                  <Right />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };

  return <>{mobile ? mobileRender() : laptopRender()}</>;
};

export default Menu;
