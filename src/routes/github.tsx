import { createFileRoute } from "@tanstack/react-router";
import { zodSearchValidator } from "@tanstack/router-zod-adapter";
import { z } from "zod";
import { userQueryOptions } from "../integrations/github/fetcher.ts";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

const SearchSchema = z.object({
  username: z.string(),
});

export const Route = createFileRoute("/github")({
  validateSearch: zodSearchValidator(SearchSchema),
  loaderDeps: ({ search }) => search,
  loader: ({ context: { queryClient }, deps: { username } }) => {
    return queryClient.ensureQueryData(userQueryOptions(username));
  },
  component: GitHubComponent,
});

function GitHubComponent() {
  const data = Route.useLoaderData();
  return (
    <Container sx={{ my: 4 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {Object.entries(data).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
