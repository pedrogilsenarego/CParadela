import { Box, Grid, Container, useTheme, useMediaQuery } from "@mui/material";

import { Colors } from "../../constants/pallette";
import * as Styled from "./styles";
import { i18n } from "../../translations/i18n";

const Footer = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  const renderLaptop = () => {
    return (
      <Box style={{ backgroundColor: "black" }}>
        <Container maxWidth='xl'>
          <Grid
            container
            justifyContent='space-between'
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
          >

          </Grid>
        </Container>
      </Box>
    );
  };

  const renderMobile = () => {
    return (
      <Box
        display='flex'
        flexDirection="column"
        justifyContent='center'
        alignItems="center"
        rowGap={2}
        style={{
          backgroundColor: "black",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >

      </Box>
    );
  };

  return <>{mobile ? renderMobile() : renderLaptop()}</>;
};

export default Footer;
