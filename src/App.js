import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode()

  return (
    <div className="app">
      <div>

      </div>
    </div>
  );
}

export default App;
