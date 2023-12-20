import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    users: any;
    usersTable: any;
    isUsersError: boolean;
    isUsersSuccess: boolean;
    isUsersLoading: boolean;
    messageUsers: any;
}

const initialState : variabel = {
    users: null,
    usersTable: null,
    isUsersError: false,
    isUsersSuccess: false,
    isUsersLoading: false,
    messageUsers: ""
}

interface varPassword {
    id: string;
    password: string;
}

export const changePassword : any = createAsyncThunk("users/changePassword", async(users : varPassword, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+'/users/'+users.id+'/password', {
            password: users.password
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getUserById : any = createAsyncThunk("users/getUserById", async(users : varPassword, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/users/'+users.id,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getUsersTable : any = createAsyncThunk("users/getUsersTable", async(users : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/users/${users.limit}&${users.page}&${users.statusCode}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getUsers: any = createAsyncThunk("users/getUsers", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/users`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        // console.log(response, 'users');
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const CreateUser  : any = createAsyncThunk("users/CreateUser", async(users : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/users', {
            nik:users.nik,
            absenId:users.absenId,
            name:users.name, 
            ganderId:users.ganderId, 
            email:users.email,
            password:users.password,
            extention:users.extention,
            nomorHp:users.nomorHp,
            penempatanId:users.penempatanId,
            jabatanId:users.jabatanId,
            atasanId:users.atasanId,
            nomorKtp:users.nomorKtp,
            alamatKtp:users.alamatKtp,
            alamatDomisili:users.alamatDomisili,
            tempatLahir:users.tempatLahir,
            tanggalLahir:users.tanggalLahir,
            nomorNpwp:users.nomorNpwp,
            statusPerkawinanId:users.statusPerkawinanId,
            jumlahAnak:users.jumlahAnak,
            namaIbu:users.namaIbu,
            pendidikanId:users.pendidikanId,
            namaSekolah:users.namaSekolah,
            jurusanSekolah:users.jurusanSekolah,
            tahunLulus:users.tahunLulus,
            ipk:users.ipk,
            nomorBpjsKesehatan:users.nomorBpjsKesehatan,
            nomorBpjsKetenagakerjaan:users.nomorBpjsKetenagakerjaan,
            contactEmergencyId:users.contactEmergencyId,
            emergencyNumber:users.emergencyNumber,
            emergencyAddress:users.emergencyAddress,
            nomorSim:users.nomorSim,
            golonganDarahId:users.golonganDarahId,
            bankId:users.bankId,
            nomorRekening:users.nomorRekening,
            jamOperasionalId:users.jamOperasionalId,
            groupId:users.groupsId,
            quote:users.quote,
            statusId:users.statusId,
            isActive:users.isActive
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const UpdateUser  : any = createAsyncThunk("users/UpdateUser", async(users : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/users/${users.id}`, {
            nik:users.nik,
            absenId:users.absenId,
            name:users.name, 
            ganderId:users.ganderId, 
            email:users.email,
            password:users.password,
            extention:users.extention,
            nomorHp:users.nomorHp,
            penempatanId:users.penempatanId,
            jabatanId:users.jabatanId,
            atasanId:users.atasanId,
            nomorKtp:users.nomorKtp,
            alamatKtp:users.alamatKtp,
            alamatDomisili:users.alamatDomisili,
            tempatLahir:users.tempatLahir,
            tanggalLahir:users.tanggalLahir,
            nomorNpwp:users.nomorNpwp,
            statusPerkawinanId:users.statusPerkawinanId,
            jumlahAnak:users.jumlahAnak,
            namaIbu:users.namaIbu,
            pendidikanId:users.pendidikanId,
            namaSekolah:users.namaSekolah,
            jurusanSekolah:users.jurusanSekolah,
            tahunLulus:users.tahunLulus,
            ipk:users.ipk,
            nomorBpjsKesehatan:users.nomorBpjsKesehatan,
            nomorBpjsKetenagakerjaan:users.nomorBpjsKetenagakerjaan,
            contactEmergencyId:users.contactEmergencyId,
            emergencyNumber:users.emergencyNumber,
            emergencyAddress:users.emergencyAddress,
            nomorSim:users.nomorSim,
            golonganDarahId:users.golonganDarahId,
            bankId:users.bankId,
            nomorRekening:users.nomorRekening,
            jamOperasionalId:users.jamOperasionalId,
            groupId:users.groupsId,
            quote:users.quote,
            statusId:users.statusId,
            isActive:users.isActive
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const deleteUser : any = createAsyncThunk("users/deleteUser", async(users : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+'/users/'+users.id,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        resetUsers: (state) => initialState
    },
    extraReducers:(builder) => {

        //change password
        builder.addCase(changePassword.pending, (state) => {
            state.isUsersLoading = true;
        });
        builder.addCase(changePassword.fulfilled, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersSuccess = true;
            state.messageUsers = action.payload;
        });
        builder.addCase(changePassword.rejected, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersError = true;
            state.messageUsers = action.payload;
        });

        //get users by id
        builder.addCase(getUserById.pending, (state) => {
            state.isUsersLoading = true;
        });
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersSuccess = true;
            state.users = action.payload;
        });
        builder.addCase(getUserById.rejected, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersError = true;
            state.messageUsers = action.payload;
        });

        //get users table
        builder.addCase(getUsersTable.pending, (state) => {
            state.isUsersLoading = true;
        });
        builder.addCase(getUsersTable.fulfilled, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersSuccess = true;
            state.usersTable = action.payload;
        });
        builder.addCase(getUsersTable.rejected, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersError = true;
            state.messageUsers = action.payload;
        });

        //get users
        builder.addCase(getUsers.pending, (state) => {
            state.isUsersLoading = true;
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersSuccess = true;
            state.users = action.payload;
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersError = true;
            state.messageUsers = action.payload;
        });

        //create users
        builder.addCase(CreateUser.pending, (state) => {
            state.isUsersLoading = true;
        });
        builder.addCase(CreateUser.fulfilled, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersSuccess = true;
            state.messageUsers = action.payload;
        });
        builder.addCase(CreateUser.rejected, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersError = true;
            state.messageUsers = action.payload;
        });

        //update users
        builder.addCase(UpdateUser.pending, (state) => {
            state.isUsersLoading = true;
        });
        builder.addCase(UpdateUser.fulfilled, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersSuccess = true;
            state.messageUsers = action.payload;
        });
        builder.addCase(UpdateUser.rejected, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersError = true;
            state.messageUsers = action.payload;
        });

        //update users
        builder.addCase(deleteUser.pending, (state) => {
            state.isUsersLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersSuccess = true;
            state.messageUsers = action.payload;
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersError = true;
            state.messageUsers = action.payload;
        });
    }
})

export const {resetUsers} = usersSlice.actions;
export default usersSlice.reducer;