import { FC, useCallback } from "react";
import { IconButton, Tooltip, useColorScheme } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

export const ModeToggle: FC = () => {
  const { mode, setMode } = useColorScheme();

  const toggleMode = useCallback(() => {
    setMode(mode === "dark" ? "light" : "dark");
  }, [mode, setMode]);

  return (
    <Tooltip
      title={mode === "dark" ? "Change to light mode" : "Change to dark mode"}
    >
      <IconButton onClick={toggleMode}>
        {mode === "dark" ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  );
};
