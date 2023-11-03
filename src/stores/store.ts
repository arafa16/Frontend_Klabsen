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
    jamOperasionalReducer : jamOperasionalsSlice,
    groupsReducer : groupsSlice,
    atasansReducer : atasansSlice,
    authReducer : authSlice,
    meReducer : meSlice,
    usersReducer : usersSlice
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
