import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Switch from "@mui/material/Switch";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ToggleThemeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: "flex", alignItems: "center" }}>
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        <Switch
          checked={darkMode}
          onChange={handleToggle}
          color="default"
          inputProps={{ "aria-label": "toggle theme" }}
        />
      </div>
    </ThemeProvider>
  );
};

export default ToggleThemeButton;
