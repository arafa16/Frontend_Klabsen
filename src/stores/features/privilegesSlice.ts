import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    privileges: any;
    isPrivilegesError: boolean;
    isPrivilegesSuccess: boolean;
    isPrivilegesLoading: boolean;
    messagePrivileges: any;
}

const initialState : variabel = {
    privileges: null,
    isPrivilegesError: false,
    isPrivilegesSuccess: false,
    isPrivilegesLoading: false,
    messagePrivileges: ""
}
export const createPrivileges : any = createAsyncThunk("createPrivileges", async(privileges : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/privileges`,{
            userId:privileges.userId, 
            dashboard:privileges.dashboard, 
            editUserSub:privileges.editUserSub, 
            absen:privileges.absen, 
            kalendarSub:privileges.kalendarSub,
            absenModal:privileges.absenModal,
            wfhModal:privileges.wfhModal,
            shiftModal:privileges.shiftModal,
            absenCheck:privileges.absenCheck,
            adminEvent:privileges.adminEvent,
            perhitunganAbsen:privileges.perhitunganAbsen,
            pengajuanKoreksiSub:privileges.pengajuanKoreksiSub, 
            approvalKoreksiSub:privileges.approvalKoreksiSub,
            approvalAllKoreksiSub:privileges.approvalAllKoreksiSub,
            slipGaji:privileges.slipGaji,
            pendapatanSub:privileges.pendapatanSub,
            pendapatanLainSub:privileges.pendapatanLainSub,
            pendapatanAdminSub:privileges.pendapatanAdminSub,
            employees:privileges.employees,
            dataEmployee:privileges.dataEmployee,
            attribute:privileges.attribute,
            setting:privileges.setting
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const updatePrivileges : any = createAsyncThunk("updatePrivileges", async(privileges : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/privileges/${privileges.idPrivilege}`,{
            userId:privileges.userId, 
            dashboard:privileges.dashboard, 
            editUserSub:privileges.editUserSub, 
            absen:privileges.absen, 
            kalendarSub:privileges.kalendarSub,
            absenModal:privileges.absenModal,
            wfhModal:privileges.wfhModal,
            shiftModal:privileges.shiftModal,
            absenCheck:privileges.absenCheck,
            adminEvent:privileges.adminEvent,
            perhitunganAbsen:privileges.perhitunganAbsen,
            pengajuanKoreksiSub:privileges.pengajuanKoreksiSub, 
            approvalKoreksiSub:privileges.approvalKoreksiSub,
            approvalAllKoreksiSub:privileges.approvalAllKoreksiSub,
            slipGaji:privileges.slipGaji,
            pendapatanSub:privileges.pendapatanSub,
            pendapatanLainSub:privileges.pendapatanLainSub,
            pendapatanAdminSub:privileges.pendapatanAdminSub,
            employees:privileges.employees,
            dataEmployee:privileges.dataEmployee,
            attribute:privileges.attribute,
            setting:privileges.setting
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});


export const privilegesSlice = createSlice({
    name: "privileges",
    initialState,
    reducers:{
        resetPrivileges: (state) => initialState
    },
    extraReducers:(builder) => {

        // create Privileges
        builder.addCase(createPrivileges.pending, (state) => {
            state.isPrivilegesLoading = true;
        });
        builder.addCase(createPrivileges.fulfilled, (state, action) => {
            state.isPrivilegesLoading = false;
            state.isPrivilegesSuccess = true;
            state.messagePrivileges = action.payload;
        });
        builder.addCase(createPrivileges.rejected, (state, action) => {
            state.isPrivilegesLoading = false;
            state.isPrivilegesError = true;
            state.messagePrivileges = action.payload;
        })
        
        // update Privileges
        builder.addCase(updatePrivileges.pending, (state) => {
            state.isPrivilegesLoading = true;
        });
        builder.addCase(updatePrivileges.fulfilled, (state, action) => {
            state.isPrivilegesLoading = false;
            state.isPrivilegesSuccess = true;
            state.messagePrivileges = action.payload;
        });
        builder.addCase(updatePrivileges.rejected, (state, action) => {
            state.isPrivilegesLoading = false;
            state.isPrivilegesError = true;
            state.messagePrivileges = action.payload;
        })



    }
})

export const {resetPrivileges} = privilegesSlice.actions;
export default privilegesSlice.reducer;