import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import Videos from "./pages/videos";
import Watch from "./pages/videos/watch";
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
        path: "videos/watch/:id",
        element: (
          <Layout>
            <Watch />
          </Layout>
        ),
      },
      {
        path: "videos/:keyword",
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
