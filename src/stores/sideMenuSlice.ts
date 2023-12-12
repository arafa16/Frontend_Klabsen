import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
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
      subMenu: [
        {
          icon: "Activity",
          pathname: "/",
          title: "Overview 1",
        },
        {
          icon: "Activity",
          pathname: "/dashboard-overview-2",
          title: "Overview 2",
        },
      ],
      
    },
    {
      icon: "Calendar",
      title: "Absen",
      subMenu: [
        {
          icon: "Calendar",
          pathname: '/absen',
          title: "Absen",
        },
        {
          icon: "Edit3",
          pathname: '/dataKoreksi',
          title: "Data Koreksi",
        },
        {
          icon: "Edit",
          pathname: '/dataKoreksiByApprover',
          title: "Approval Koreksi",
        },
        
      ],
    },
    {
      icon: "Users",
      title: "Employees",
      subMenu: [
        {
          icon: "Users",
          pathname: "/dataEmploye",
          title: "Data Employe",
        },
      ],
    },
    {
      icon: "Settings",
      title: "Attribute",
      subMenu: [
        {
          icon: "MapPin",
          pathname: "/penempatan",
          title: "Penempatan",
        },
        {
          icon: "Award",
          pathname: "/jabatan",
          title: "Jabatan",
        },
        {
          icon: "Bookmark",
          pathname: "/pendidikan",
          title: "Pendidikan",
        },
        {
          icon: "DollarSign",
          pathname: "/bank",
          title: "Bank",
        },
        {
          icon: "Users",
          pathname: "/statusPerkawinan",
          title: "Status Perkawinan",
        },
        {
          icon: "PhoneOutgoing",
          pathname: "/contactEmergency",
          title: "Contact Emergency",
        },
        {
          icon: "Droplet",
          pathname: "/golonganDarah",
          title: "Golongan Darah",
        },
        {
          icon: "Users",
          pathname: "/group",
          title: "Group",
        },
        {
          icon: "User",
          pathname: "/gander",
          title: "Gander",
        },
        {
          icon: "Award",
          pathname: "/status",
          title: "Status",
        },
        {
          icon: "Shuffle",
          pathname: "/statusInout",
          title: "Status In Out",
        },
        {
          icon: "MessageSquare",
          pathname: "/tipeNotification",
          title: "Tipe Notification",
        },
        {
          icon: "Award",
          pathname: "/tipeAbsen",
          title: "Tipe Absen",
        },
        {
          icon: "Award",
          pathname: "/pelanggaran",
          title: "Pelanggaran",
        },
        {
          icon: "Award",
          pathname: "/statusKoreksi",
          title: "Status Koreksi",
        },
        {
          icon: "DollarSign",
          pathname: "/tipePendapatan",
          title: "Tipe Pendapatan",
        },
        {
          icon: "Watch",
          pathname: "/jamOperasional",
          title: "Jam Operasional",
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
