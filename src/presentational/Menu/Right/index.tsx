import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../translations/i18n";
import InstaAvatar from "../../../components/InstaAvatar";
import { useDispatch } from "react-redux";
import { updateLang } from "../../../slicer/general/general.actions";

const Right = () => {
  const changeLanguage = (lng: string) => {
    dispatch(updateLang(lng.toUpperCase()));
    i18n.changeLanguage(lng);
    setTimeout(() => { window.location.reload(); }, 200)

  };

  const dispatch = useDispatch();
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <Grid container justifyContent={mobile ? "center" : "start"}>
      {!mobile && (
        <Grid item>
          <Box

          >
            <InstaAvatar backgroundColor='white' color="darkGrey" />
          </Box>
        </Grid>
      )}
      <Grid>
        <Box >
          <Typography
            fontSize={mobile ? "24px" : "auto"}
            color='darkGrey'
            onClick={() => {
              changeLanguage("pt");

            }}
            style={{ cursor: "pointer" }}
          >
            PT
          </Typography>
          <Typography
            fontSize={mobile ? "24px" : "auto"}
            color='darkGrey'
            onClick={() => {
              changeLanguage("en");
            }}
            style={{ cursor: "pointer" }}
          >
            EN
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Right;
