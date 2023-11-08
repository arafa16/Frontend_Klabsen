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
import Group from "../pages/Setting/Group/Group";
import CreateGroup from "../pages/Setting/Group/CreateGroup";
import EditGroup from "../pages/Setting/Group/EditGroup";
import Gander from "../pages/Setting/Gander/Gander";
import CreateGander from "../pages/Setting/Gander/CreateGander";
import EditGander from "../pages/Setting/Gander/EditGander";
import Status from "../pages/Setting/Status/Status";
import CreateStatus from "../pages/Setting/Status/CreateStatus";
import EditStatus from "../pages/Setting/Status/EditStatus";
import TipeNotification from "../pages/Setting/TipeNotification/TipeNotification";
import CreateTipeNotification from "../pages/Setting/TipeNotification/CreateTipeNotification";
import EditTipeNotification from "../pages/Setting/TipeNotification/EditTipeNotification";
import TipeAbsen from "../pages/Setting/TipeAbsen/TipeAbsen";
import CreateTipeAbsen from "../pages/Setting/TipeAbsen/CreateTipeAbsen";
import EditTipeAbsen from "../pages/Setting/TipeAbsen/EditTipeAbsen";
import { Pelanggaran } from "../pages/Setting/Pelanggaran/Pelanggaran";
import CreatePelanggaran from "../pages/Setting/Pelanggaran/CreatePelanggaran";
import EditPelanggaran from "../pages/Setting/Pelanggaran/EditPelanggaran";
import StatusKoreksi from "../pages/Setting/StatusKoreksi/StatusKoreksi";
import CreateStatusKoreksi from "../pages/Setting/StatusKoreksi/CreateStatusKoreksi";
import EditStatusKoreksi from "../pages/Setting/StatusKoreksi/EditStatusKoreksi";
import TipePendapatan from "../pages/Setting/TipePendapatan/TipePendapatan";
import CreateTipePendapatan from "../pages/Setting/TipePendapatan/CreateTipePendapatan";
import EditTipePendapatan from "../pages/Setting/TipePendapatan/EditTipePendapatan";

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
        //contact emergency
        {
          path: "/group",
          element: <Group />
        },
        {
          path: "/createGroup",
          element: <CreateGroup />
        },
        {
          path: "/editGroup/:uuid",
          element: <EditGroup />
        },
        //contact emergency
        {
          path: "/gander",
          element: <Gander />
        },
        {
          path: "/createGander",
          element: <CreateGander />
        },
        {
          path: "/editGander/:uuid",
          element: <EditGander />
        },
        //status
        {
          path: "/status",
          element: <Status />
        },
        {
          path: "/createStatus",
          element: <CreateStatus />
        },
        {
          path: "/editStatus/:uuid",
          element: <EditStatus />
        },
        //Tipe Notification
        {
          path: "/tipeNotification",
          element: <TipeNotification />
        },
        {
          path: "/createTipeNotification",
          element: <CreateTipeNotification />
        },
        {
          path: "/editTipeNotification/:uuid",
          element: <EditTipeNotification />
        },
        //Tipe Absen
        {
          path: "/tipeAbsen",
          element: <TipeAbsen />
        },
        {
          path: "/createTipeAbsen",
          element: <CreateTipeAbsen />
        },
        {
          path: "/editTipeAbsen/:uuid",
          element: <EditTipeAbsen />
        },
        //Pelanggaran
        {
          path: "/pelanggaran",
          element: <Pelanggaran />
        },
        {
          path: "/createPelanggaran",
          element: <CreatePelanggaran />
        },
        {
          path: "/editPelanggaran/:uuid",
          element: <EditPelanggaran />
        },
        //Status Koreksi
        {
          path: "/statusKoreksi",
          element: <StatusKoreksi />
        },
        {
          path: "/createStatusKoreksi",
          element: <CreateStatusKoreksi />
        },
        {
          path: "/editStatusKoreksi/:uuid",
          element: <EditStatusKoreksi />
        },
        //Status Koreksi
        {
          path: "/tipePendapatan",
          element: <TipePendapatan />
        },
        {
          path: "/createTipePendapatan",
          element: <CreateTipePendapatan />
        },
        {
          path: "/editTipePendapatan/:uuid",
          element: <EditTipePendapatan />
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
