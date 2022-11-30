import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../constants/routes";
import { i18n } from "../../../translations/i18n";

const Left = () => {
  const navigate = useNavigate();
  return (
    <Typography
      style={{ fontSize: "24px", letterSpacing: "2px", fontWeight: 500, cursor: "pointer" }}
      onClick={() => navigate(ROUTE_PATHS.HOME)}
    >
      {i18n.t("menuBar.brand")}
    </Typography>
  );
};

export default Left;
