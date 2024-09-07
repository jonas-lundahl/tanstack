import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { AppHeader } from "../components/AppHeader.tsx";
import { TanStackRouterDevtools } from "../components/TanStackRouterDevTools.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient } from "@tanstack/react-query";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRoute,
});

function RootRoute() {
  return (
    <>
      <AppHeader />
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  );
}
