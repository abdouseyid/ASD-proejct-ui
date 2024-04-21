import { RouteObject } from "react-router";
import Layout from "../layout";
import Applications from "../pages/applications";
import Resume from "../pages/Resume";
import Dashbord from "../pages/dashbord";
import Notes from "../pages/notes";
import Companies from "../pages/companies";
import Apply from "../pages/apply";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        children: [
          {
            path: "applications",
            element: <Applications />,
          },
          {
            path: "resume",
            element: <Resume />,
          },
          {
            path: "home",
            element: <Dashbord />,
          },
          {
            path: "notes",
            element: <Notes />,
          },
		  {
            path: "companies",
            element: <Companies />,
          },
		  {
            path: "apply",
            element: <Apply />,
          },
        ],
      },
    ],
  },
];

export default routes;
