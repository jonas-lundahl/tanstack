import { createLazyFileRoute } from "@tanstack/react-router";
import { Container, Link, Stack, Typography } from "@mui/material";
import viteLogo from "../../vite.svg";
import reactLogo from "../assets/react.svg";

export const Route = createLazyFileRoute("/about")({
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <Container>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ minHeight: 300 }}
      >
        <Typography textAlign="center">
          Click on the Vite and React logos to learn more
        </Typography>
        <Stack direction="row" spacing={4}>
          <Link href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} alt="Vite logo" />
          </Link>
          <Link href="https://react.dev" target="_blank">
            <img src={reactLogo} alt="React logo" />
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
