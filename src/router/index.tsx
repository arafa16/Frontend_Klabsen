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
import Bank from "../pages/Setting/Bank/Bank";
import CreateBank from "../pages/Setting/Bank/CreateBank";
import EditBank from "../pages/Setting/Bank/EditBank";
import StatusPerkawinan from "../pages/Setting/StatusPerkawinan/StatusPerkawinan";
import CreateStatusPerkawinan from "../pages/Setting/StatusPerkawinan/CreateStatusPerkawinan";
import EditStatusPerkawinan from "../pages/Setting/StatusPerkawinan/EditStatusPerkawinan";
import ContactEmergency from "../pages/Setting/ContactEmergency/ContactEmergency";
import CreateContactEmergency from "../pages/Setting/ContactEmergency/CreateContactEmergency";
import EditContactEmergency from "../pages/Setting/ContactEmergency/EditContactEmergency";
import GolonganDarah from "../pages/Setting/GolonganDarah/GolonganDarah";
import CreateGolonganDarah from "../pages/Setting/GolonganDarah/CreateGolonganDarah";
import EditGolonganDarah from "../pages/Setting/GolonganDarah/EditGolonganDarah";

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
        },
        //Bank
        {
          path: "/bank",
          element: <Bank />
        },
        {
          path: "/editBank/:uuid",
          element: <EditBank />
        },
        {
          path: "/createBank",
          element: <CreateBank />
        },
        //Status Perkawinan
        {
          path: "/statusPerkawinan",
          element: <StatusPerkawinan />
        },
        {
          path: "/editStatusPerkawinan/:uuid",
          element: <EditStatusPerkawinan />
        },
        {
          path: "/createStatusPerkawinan",
          element: <CreateStatusPerkawinan />
        },
        //contact emergency
        {
          path: "/contactEmergency",
          element: <ContactEmergency />
        },
        {
          path: "/createContactEmergency",
          element: <CreateContactEmergency />
        },
        {
          path: "/editContactEmergency/:uuid",
          element: <EditContactEmergency />
        },
        //contact emergency
        {
          path: "/golonganDarah",
          element: <GolonganDarah />
        },
        {
          path: "/createGolonganDarah",
          element: <CreateGolonganDarah />
        },
        {
          path: "/editGolonganDarah/:uuid",
          element: <EditGolonganDarah />
        },
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
