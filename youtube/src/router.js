import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import Videos from "./pages/videos";
import Components from "./pages/components";

export default createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "videos/:id",
        element: <Videos />,
      },
      {
        path: "components",
        element: <Components />,
      },
    ],
  },
]);
