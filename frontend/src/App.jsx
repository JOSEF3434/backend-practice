import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import Hompage from "./pages/hompage";
import DashboardLayout from "./pages/DashboardLayout";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Routes>
          {/* Homepage blueAccent[700] */}
          <Route path="/" element={<Hompage />} />

          {/* Dashboard pages */}
          <Route path="/*" element={<DashboardLayout />} />
        </Routes>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
