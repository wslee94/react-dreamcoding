import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import Videos from "./pages/videos";
import Components from "./pages/components";
import Layout from "./layouts";

export default createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: (
          <Layout>
            <Main />
          </Layout>
        ),
      },
      {
        path: "videos/:id",
        element: (
          <Layout>
            <Videos />
          </Layout>
        ),
      },
      {
        path: "components",
        element: (
          <Layout>
            <Components />
          </Layout>
        ),
      },
    ],
  },
]);
