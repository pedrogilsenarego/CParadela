
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./utils/ScrollToTop";
import {
  StyledEngineProvider,
  CssBaseline,
  ThemeProvider, createTheme
} from "@mui/material";
import Cursor from "./presentational/Cursor";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Gotham-Book',
      textTransform: 'none',
      fontSize: 14,
      caretColor: "transparent",
      letterSpacing: "3px",
    },
  },
});


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />

          <Cursor />
          <ScrollToTop />
          <AppRoutes />
        </StyledEngineProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
