import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../constants/routes";
import { hover } from "../../slicer/general/general.actions";
import { i18n } from "../../translations/i18n";

const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      onClick={() => navigate(ROUTE_PATHS.HOME)}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh", width: "100vw", rowGap: "10px" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        onMouseEnter={() => dispatch(hover(true))}
        onMouseLeave={() => dispatch(hover(false))}
      >
        <Typography
          style={{
            fontSize: mobile ? "14px" : "24px",
            letterSpacing: "10px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          {i18n.t("menuBar.brand")}
        </Typography>
        <Typography
          style={{
            fontSize: mobile ? "10px" : "16px",
            letterSpacing: "8px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          {i18n.t("menuBar.subTitle")}
        </Typography>
        <Typography
          style={{
            marginTop: "100px",
            fontSize: mobile ? "10px" : "16px",
            letterSpacing: "8px",
            textAlign: "center",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Website Under Construction
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
