import {
  Box,
  Grid,
  Container,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import Left from "./Left";
import Right from "./Right";
import { hover, updateLang } from "../../slicer/general/general.actions";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../slicer/types";
import { i18n } from "../../translations/i18n";

const Menu = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const dispatch = useDispatch()

  const lang = useSelector<State, string>(
    (state) => state.general.lang || "PT"
  );

  const handleChangeLang = () => {
    changeLanguage(lang === "PT" ? "en" : "pt")
  }

  const changeLanguage = (lng: string) => {
    dispatch(updateLang(lng.toUpperCase()));
    i18n.changeLanguage(lng);
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

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

          <Grid item
            onMouseEnter={() => dispatch(hover(true))}
            onMouseLeave={() => dispatch(hover(false))}
          >
            <Box display="flex" columnGap={2} alignItems="center" >
              <Box display='flex'
                justifyContent='center'
                alignItems='center' onClick={() => { handleChangeLang() }} style={{ padding: "10px" }}>
                <Typography mt="8px" fontSize="14px" fontWeight={800}>{lang}</Typography>
              </Box>
              <Right />
            </Box>
          </Grid>

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
            <Grid item xs={8}>
              <Left />
            </Grid>

            <Grid item xs={4} textAlign='right' >


              <Box display="flex" justifyContent="end" alignItems="center" >
                <Box onClick={() => { handleChangeLang() }} style={{ padding: "10px" }}>
                  <Typography fontSize="14px" fontWeight={800}>{lang}</Typography>
                </Box>
                <Right />
              </Box>


            </Grid>

          </Grid>
        </Container>
      </Box>
    );
  };

  return <>{mobile ? mobileRender() : laptopRender()}</>;
};

export default Menu;
