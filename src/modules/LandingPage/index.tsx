import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../constants/routes";
import { i18n } from "../../translations/i18n";

const LandingPage = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      onClick={() => navigate(ROUTE_PATHS.HOME)}
      display='flex'
      flexDirection="column"

      justifyContent='center'
      alignItems='center'
      style={{ height: "100vh", width: "100vw", rowGap: "20px" }}
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
          letterSpacing: "6px",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        {i18n.t("menuBar.subTitle")}
      </Typography>
    </Box>
  );
};

export default LandingPage;
