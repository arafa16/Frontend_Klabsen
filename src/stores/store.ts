import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import colorSchemeReducer from "./colorSchemeSlice";
import sideMenuReducer from "./sideMenuSlice";
import ganderSlice from "./features/ganderSlice";
import statusPerkawinansSlice from "./features/statusPerkawinansSlice";
import pendidikansSlice from "./features/pendidikansSlice";
import banksSlice from "./features/banksSlice";
import contactsSlice from "./features/contactsSlice";
import golonganDarahSlice from "./features/golonganDarahSlice";
import penempatansSlice from "./features/penempatansSlice";
import jabatansSlice from "./features/jabatansSlice";
import jamOperasionalsSlice from "./features/jamOperasionalsSlice";
import groupsSlice from "./features/groupsSlice";
import atasansSlice from "./features/atasansSlice";
import authSlice from "./features/authSlice";
import meSlice from "./features/meSlice";
import usersSlice from "./features/usersSlice";
import statusSlice from "./features/statusSlice";
import tipeNotificationsSlice from "./features/tipeNotificationSlice";
import tipeAbsensSlice from "./features/tipeAbsenSlice";
import pelanggaransSlice from "./features/pelanggaransSlice";
import statusKoreksiSlice from "./features/statusKoreksiSlice";
import tipePendapatansSlice from "./features/tipePendapatanSlice";
import statusInOutSlice from "./features/statusInoutSlice";
import inOutsSlice from "./features/inOutsSlice";
import koreksisSlice from "./features/koresisSlice";
import privilegesSlice from "./features/privilegesSlice";
import pendapatansSlice from "./features/pendapatansSlice";
import pageSlice from "./features/pageSlice";
import periodeKerjasSlice from "./features/periodeKerjasSlice";
import tipeEventsSlice from "./features/tipeEventSlice";
import eventsSlice from "./features/eventsSlice";
import perhitunganSlice from "./features/perhitunganSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    colorScheme: colorSchemeReducer,
    sideMenu: sideMenuReducer,
    ganderReducer: ganderSlice,
    statusPerkawinansReducer: statusPerkawinansSlice,
    pendidikansReducer: pendidikansSlice,
    banksReducer: banksSlice,
    contactsReducer: contactsSlice,
    golonganDarahsReducer: golonganDarahSlice,
    penempatansReducer : penempatansSlice,
    jabatansReducer : jabatansSlice, 
    jamOperasionalsReducer : jamOperasionalsSlice,
    groupsReducer : groupsSlice,
    atasansReducer : atasansSlice,
    authReducer : authSlice,
    meReducer : meSlice,
    usersReducer : usersSlice,
    statusReducer : statusSlice,
    statusInoutReducer : statusInOutSlice,
    tipeNotificationsReducer : tipeNotificationsSlice,
    tipeAbsensReducer : tipeAbsensSlice,
    pelanggaransReducer : pelanggaransSlice,
    statusKoreksiReducer : statusKoreksiSlice,
    tipePendapatansReducer : tipePendapatansSlice,
    inOutsReducer : inOutsSlice,
    koreksisReducer : koreksisSlice,
    privilegesReducer : privilegesSlice,
    pendapatansReducer : pendapatansSlice,
    pagesReducer : pageSlice,
    periodeKerjasReducer : periodeKerjasSlice,
    tipeEventsReducer : tipeEventsSlice,
    eventsReducer : eventsSlice,
    perhitunganReducer : perhitunganSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
