import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../constants/routes";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(ROUTE_PATHS.HOME)}
      display='flex'
      justifyContent='center'
      alignItems='center'
      style={{ height: "100vh", width: "100vw" }}
    >
      Teste
    </Box>
  );
};

export default LandingPage;
