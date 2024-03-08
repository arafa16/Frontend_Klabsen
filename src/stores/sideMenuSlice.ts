import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
  code?: string;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
    "START MENU",
    {
      icon: "Home",
      title: "Dashboard",
      code: 'dashboard',
      subMenu: [
        {
          icon: "Activity",
          pathname: "/",
          title: "Overview 1",
          code: 'dashboard',
        },
        {
          icon: "Activity",
          pathname: "/dashboard-overview-2",
          title: "Overview 2",
          code: 'dashboard',
        },
      ],
      
    },
    {
      icon: "Calendar",
      title: "Absen",
      code: 'absen',
      subMenu: [
        {
          icon: "Calendar",
          pathname: '/absen',
          title: "Absen",
          code: 'absen',
        },
        {
          icon: "Edit3",
          pathname: '/dataKoreksi',
          title: "Data Koreksi",
          code: 'absen',
        },
        {
          icon: "Edit",
          pathname: '/dataKoreksiByApprover',
          title: "Approval Koreksi",
          code: 'absen',
        },
        {
          icon: "Edit",
          pathname: '/absenViewUser',
          title: "Absen Check",
          code: 'absen',
        },
        {
          icon: "Edit",
          pathname: '/events',
          title: "Admin Event",
          code: 'absen',
        },
      ],
    },
    {
      icon: "Users",
      title: "Employees",
      code: 'admin',
      subMenu: [
        {
          icon: "Users",
          pathname: "/dataEmploye",
          title: "Data Employe",
          code: 'admin',
        },
      ],
    },
    {
      icon: "DollarSign",
      title: "Slip Gaji",
      code: 'slipGaji',
      subMenu: [
        {
          icon: "FileText",
          pathname: "/pendapatan",
          title: "Pendapatan",
          code: 'pendapatanSub',
        },
        {
          icon: "FileText",
          pathname: "/pendapatanLain",
          title: "Pendapatan Lain",
          code: 'pendapatanLainSub',
        },
        {
          icon: "FileEdit",
          pathname: "/pendapatanAdmin",
          title: "Admin Pendapatan",
          code: 'pendapatanAdminSub',
        }
      ],
    },
    {
      icon: "Settings",
      title: "Attribute",
      code: 'setting',
      subMenu: [
        {
          icon: "MapPin",
          pathname: "/penempatan",
          title: "Penempatan",
          code: 'setting',
        },
        {
          icon: "Award",
          pathname: "/jabatan",
          title: "Jabatan",
          code: 'setting',
        },
        {
          icon: "Bookmark",
          pathname: "/pendidikan",
          title: "Pendidikan",
          code: 'setting',
        },
        {
          icon: "DollarSign",
          pathname: "/bank",
          title: "Bank",
          code: 'setting',
        },
        {
          icon: "Users",
          pathname: "/statusPerkawinan",
          title: "Status Perkawinan",
          code: 'setting',
        },
        {
          icon: "PhoneOutgoing",
          pathname: "/contactEmergency",
          title: "Contact Emergency",
          code: 'setting',
        },
        {
          icon: "Droplet",
          pathname: "/golonganDarah",
          title: "Golongan Darah",
          code: 'setting',
        },
        {
          icon: "Users",
          pathname: "/group",
          title: "Group",
          code: 'setting',
        },
        {
          icon: "User",
          pathname: "/gander",
          title: "Gander",
          code: 'setting',
        },
        {
          icon: "Award",
          pathname: "/status",
          title: "Status",
          code: 'setting',
        },
        {
          icon: "Shuffle",
          pathname: "/statusInout",
          title: "Status In Out",
          code: 'setting',
        },
        {
          icon: "MessageSquare",
          pathname: "/tipeNotification",
          title: "Tipe Notification",
          code: 'setting',
        },
        {
          icon: "Award",
          pathname: "/tipeAbsen",
          title: "Tipe Absen",
          code: 'setting',
        },
        {
          icon: "Award",
          pathname: "/tipeEvent",
          title: "Tipe Event",
          code: 'setting',
        },
        {
          icon: "Award",
          pathname: "/pelanggaran",
          title: "Pelanggaran",
          code: 'setting',
        },
        {
          icon: "Award",
          pathname: "/statusKoreksi",
          title: "Status Koreksi",
          code: 'setting',
        },
        {
          icon: "DollarSign",
          pathname: "/tipePendapatan",
          title: "Tipe Pendapatan",
          code: 'setting',
        },
        {
          icon: "Watch",
          pathname: "/jamOperasional",
          title: "Jam Operasional",
          code: 'setting',
        },
        {
          icon: "Watch",
          pathname: "/periodeKerja",
          title: "Periode Kerja",
          code: 'setting',
        },
      ],
    }
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
