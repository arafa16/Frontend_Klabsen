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
import JamOperasional from "../pages/Setting/JamOperasional/JamOperasional";
import CreateJamOperasional from "../pages/Setting/JamOperasional/CreateJamOperasional";
import EditJamOperasional from "../pages/Setting/JamOperasional/EditJamOperasional";
import StatusInout from "../pages/Setting/StatusInOut/StatusInout";
import CreateStatusInout from "../pages/Setting/StatusInOut/CreateStatusInout";
import EditStatusInout from "../pages/Setting/StatusInOut/EditStatusInout";
import DataUser from "../components/Profile/DataUser";
import DataEmploye from "../pages/Employe/DataEmploye";
import CreateEmploye from "../pages/Employe/CreateEmploye";
import ViewEmploye from "../pages/Employe/ViewEmploye";
import UpdateEmploye from "../pages/Employe/UpdateEmploye";
import Absen from "../pages/Absen/Absen";
import ViewKoreksi from "../pages/Koreksi/ViewKoreksi";
import DataKoreksi from "../pages/Koreksi/DataKoreksi";
import DataKoreksiByApprover from "../pages/Koreksi/DataKoreksiByApprover";
import ViewKoreksiToApprove from "../pages/Koreksi/ViewKoreksiToApprove";
import AbsenByDate from "../pages/Absen/AbsenByDate";
import ViewKoreksiByData from "../pages/Koreksi/ViewKoreksiByData";
import DataKoreksiByApproverAndCode from "../pages/Koreksi/DataKoreksiByApproverAndCode";
import DataKoreksiByCode from "../pages/Koreksi/DataKoreksiByCode";
import Pendapatan from "../pages/Pendapatan/Pendapatan";
import PendapatanLain from "../pages/Pendapatan/PendapatanLain";
import AdminPendapatan from "../pages/Pendapatan/AdminPendapatan";
import ViewSlip from "../pages/Pendapatan/ViewSlip";
import ViewSlipBonus from "../pages/Pendapatan/ViewSlipBonus";
import AbsenViewUser from "../pages/Absen/AbsenViewUser";
import AbsenViewCalendar from "../pages/Absen/AbsenViewCalendar";
import PeriodeKerja from "../pages/Setting/PeriodeKerja/PeriodeKerja";
import EditPeriodeKerja from "../pages/Setting/PeriodeKerja/EditPeriodeKerja";
import CreatePeriodeKerja from "../pages/Setting/PeriodeKerja/CreatePeriodeKerja";
import TipeEvent from "../pages/Setting/TipeEvent/TipeEvent";
import CreateTipeEvent from "../pages/Setting/TipeEvent/CreateTipeEvent";
import EditTipeEvent from "../pages/Setting/TipeEvent/EditTipeEvent";
import EventPage from "../pages/EventsPage/EventPage";
import EditEvent from "../pages/EventsPage/EditEvent";
import CreateEvent from "../pages/EventsPage/CreateEvent";

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
        //statusInout
        {
          path: "/statusInout",
          element: <StatusInout />
        },
        {
          path: "/createStatusInout",
          element: <CreateStatusInout />
        },
        {
          path: "/editStatusInout/:uuid",
          element: <EditStatusInout />
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
        //Jam Operasional
        {
          path: "/jamOperasional",
          element: <JamOperasional />
        },
        {
          path: "/createJamOperasional",
          element: <CreateJamOperasional />
        },
        {
          path: "/editJamOperasional/:uuid",
          element: <EditJamOperasional />
        },
        //employe
        {
          path: "/dataEmploye",
          element: <DataEmploye />
        },
        {
          path: "/createEmploye",
          element: <CreateEmploye />
        },
        {
          path: "/viewEmploye/:id",
          element: <ViewEmploye />
        },
        {
          path: "/updateEmploye/:id",
          element: <UpdateEmploye />
        },
        //absen
        {
          path: "/absen",
          element: <Absen />
        },
        {
          path: "/absen/:date",
          element: <AbsenByDate />
        },
        {
          path: "/absen/:date",
          element: <Absen />
        },
        {
          path: "/absenViewUser",
          element: <AbsenViewUser />
        },
        {
          path: "/absenViewCalendar/:uuid",
          element: <AbsenViewCalendar />
        },
        //koreksi
        {
          path: "/dataKoreksi",
          element: <DataKoreksi />
        },
        {
          path: "/dataKoreksi/:code",
          element: <DataKoreksiByCode />
        },
        {
          path: "/dataKoreksiByApprover",
          element: <DataKoreksiByApprover />
        },
        {
          path: "/dataKoreksiByApprover/:code",
          element: <DataKoreksiByApproverAndCode />
        },
        {
          path: "/viewKoreksi/:id",
          element: <ViewKoreksi />
        },
        {
          path: "/viewKoreksi/:id/:code",
          element: <ViewKoreksiByData />
        },
        {
          path: "/viewKoreksiToApprove/:id/:code",
          element: <ViewKoreksiToApprove />
        },
        //pendapatan
        {
          path: "/pendapatan",
          element: <Pendapatan />
        },
        {
          path: "/pendapatanLain",
          element: <PendapatanLain />
        },
        {
          path: "/pendapatanAdmin",
          element: <AdminPendapatan />
        },
        {
          path: "/viewSlip/:id",
          element: <ViewSlip />
        },
        {
          path: "/viewSlipBonus/:id",
          element: <ViewSlipBonus />
        },
        //periode kerja
        {
          path:"/periodeKerja",
          element: <PeriodeKerja />
        },
        {
          path:"/editPeriodeKerja/:id",
          element: <EditPeriodeKerja />
        },
        {
          path:"/createPeriodeKerja",
          element: <CreatePeriodeKerja />
        },
        //tipe Event
        {
          path:"/tipeEvent",
          element: <TipeEvent />
        },
        {
          path:"/createTipeEvent",
          element: <CreateTipeEvent />
        },
        {
          path:"/editTipeEvent/:id",
          element: <EditTipeEvent />
        },
        //Event
        {
          path:"/events",
          element: <EventPage />
        },
        {
          path:"/editEvent/:id",
          element: <EditEvent />
        },
        {
          path:"/createEvent",
          element: <CreateEvent />
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
