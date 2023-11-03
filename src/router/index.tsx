import { useRoutes } from "react-router-dom";
import Menu from "../layouts/SideMenu";
import DashboardOverview1 from "../pages/DashboardOverview1";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

//profile
import UserProfile from "../pages/Profile/UserProfile";
import Penempatan from "../pages/Setting/Penempatan/Penempatan";
import Jabatan from "../pages/Setting/Jabatan/Jabatan";
import EditJabatan from "../pages/Setting/Jabatan/EditJabatan";
import EditPenempatan from "../pages/Setting/Penempatan/EditPenempatan";
import CreateJabatan from "../pages/Setting/Jabatan/CreateJabatan";
import CreatePenempatan from "../pages/Setting/Penempatan/CreatePenempatan";
import { Pendidikan } from "../pages/Setting/Pendidikan/Pendidikan";
import CreatePendidikan from "../pages/Setting/Pendidikan/CreatePendidikan";
import EditPendidikan from "../pages/Setting/Pendidikan/EditPendidikan";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Menu />,
      children: [
        {
          path: "/",
          element: <DashboardOverview1 />,
        },
        //profile user
        {
          path: "/profile/:id",
          element: <UserProfile />
        },
        //setting
        //penempatan
        {
          path: "/penempatan",
          element: <Penempatan />
        },
        {
          path: "/editPenempatan/:uuid",
          element: <EditPenempatan />
        },
        {
          path: "/createPenempatan",
          element: <CreatePenempatan />
        },
        //penempatan
        {
          path: "/jabatan",
          element: <Jabatan />
        },
        {
          path: "/editJabatan/:uuid",
          element: <EditJabatan />
        },
        {
          path: "/createJabatan",
          element: <CreateJabatan />
        },
        //pendidikan
        {
          path: "/pendidikan",
          element: <Pendidikan />
        },
        {
          path: "/editPendidikan/:uuid",
          element: <EditPendidikan />
        },
        {
          path: "/createPendidikan",
          element: <CreatePendidikan />
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
