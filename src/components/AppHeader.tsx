import { FC } from "react";
import { AppBar, Divider, Toolbar, Typography } from "@mui/material";
import { ModeToggle } from "./ModeToggle.tsx";
import viteLogo from "/vite.svg";
import { GitHub, Info } from "@mui/icons-material";
import { IconButtonLink } from "./IconButtonLink.tsx";
import { PlainLink } from "./PlainLink.tsx";
import { Image } from "./Image.tsx";

export const AppHeader: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <PlainLink to="/">
          <Image src={viteLogo} alt="Vite logo" />
        </PlainLink>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Vite + React
        </Typography>
        <IconButtonLink to="/github" search={{ username: "sejonlu" }}>
          <GitHub />
        </IconButtonLink>
        <IconButtonLink to="/about">
          <Info />
        </IconButtonLink>
        <ModeToggle />
      </Toolbar>
    </AppBar>
  );
};
