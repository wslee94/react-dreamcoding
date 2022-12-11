import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import Layout from "./layouts";
import router from "./router";

const queryClient = new QueryClient({
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  refetchInterval: false,
  retry: false,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <RouterProvider router={router} />;
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
