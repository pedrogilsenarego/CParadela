import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../constants/routes";
import { i18n } from "../../../translations/i18n";
import { useLocation } from "react-router";
import Logo from "../../../assets/images/logo.png"

const Left = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    location.pathname === ROUTE_PATHS.HOME ? <img onClick={() =>
      navigate(ROUTE_PATHS.ABOUT)
    } src={Logo} alt="" height="60px" /> :
      <Typography
        style={{
          fontSize: mobile ? "14px" : "24px",
          letterSpacing: "10px",
          fontWeight: 500,
          cursor: "pointer",
        }}
        onClick={() =>
          navigate(ROUTE_PATHS.HOME)
        }
      >
        {i18n.t("menuBar.brand")}
      </Typography>
  );
};

export default Left;
