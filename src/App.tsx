
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./utils/ScrollToTop";
import {
  StyledEngineProvider,
  CssBaseline,
} from "@mui/material";
import Cursor from "./presentational/Cursor";


function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <CssBaseline />

        <Cursor />
        <ScrollToTop />
        <AppRoutes />
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
