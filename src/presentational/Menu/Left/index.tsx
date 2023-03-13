import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../constants/routes";
import { i18n } from "../../../translations/i18n";
import { useLocation } from "react-router";
import Logo from "../../../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { hover } from "../../../slicer/general/general.actions";

const Left = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return mobile ?
    <img
      onMouseEnter={() => dispatch(hover(true))}
      onMouseLeave={() => dispatch(hover(false))}
      onClick={() => {
        navigate(location.pathname === ROUTE_PATHS.HOME ? ROUTE_PATHS.ABOUT : ROUTE_PATHS.HOME);
      }}
      src={Logo}
      alt=''
      height={mobile ? "80px" : "100px"}
      style={{ marginTop: "15px" }}
    /> :

    <div
      onMouseEnter={() => dispatch(hover(true))}
      onMouseLeave={() => dispatch(hover(false))}
      onClick={() => {
        navigate(location.pathname === ROUTE_PATHS.HOME ? ROUTE_PATHS.ABOUT : ROUTE_PATHS.HOME);
        dispatch(hover(false));
      }}
    >
      <Typography
        style={{
          fontSize: mobile ? "14px" : "24px",
          letterSpacing: "10px",
          fontWeight: 500,
          cursor: "pointer",
          marginTop: "40px",
        }}
      >
        {i18n.t("menuBar.brand")}
      </Typography>
      <Typography
        style={{
          fontSize: mobile ? "12px" : "16px",
          letterSpacing: "8px",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        {i18n.t("menuBar.subTitle")}
      </Typography>
    </div>

};

export default Left;
