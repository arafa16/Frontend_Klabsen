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
      icon: "Settings",
      title: "Attribute",
      subMenu: [
        {
          icon: "MapPin",
          pathname: "/penempatan",
          title: "Penempatan",
        },
        {
          icon: "UserCheck",
          pathname: "/jabatan",
          title: "Jabatan",
        },
        {
          icon: "UserCheck",
          pathname: "/pendidikan",
          title: "Pendidikan",
        },
        {
          icon: "UserCheck",
          pathname: "/bank",
          title: "Bank",
        },
        {
          icon: "UserCheck",
          pathname: "/statusPerkawinan",
          title: "Status Perkawinan",
        },
        {
          icon: "UserCheck",
          pathname: "/contactEmergency",
          title: "Contact Emergency",
        },
        {
          icon: "UserCheck",
          pathname: "/golonganDarah",
          title: "Golongan Darah",
        },
        {
          icon: "UserCheck",
          pathname: "/group",
          title: "Group",
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
