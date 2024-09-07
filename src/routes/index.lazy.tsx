import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

export const Route = createLazyFileRoute("/")({
  component: IndexRoute,
});

function IndexRoute() {
  const [count, setCount] = useState(0);

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 4, py: 4 }}>
      <Card>
        <CardContent>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <Typography>
            Edit <code>src/App.tsx</code> and save to test HMR
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
