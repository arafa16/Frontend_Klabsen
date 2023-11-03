import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    auth: any;
    isAuthError: boolean;
    isAuthSuccess: boolean;
    isAuthLoading: boolean;
    messageAuth: any;
}

const initialState : variabel = {
    auth: null,
    isAuthError: false,
    isAuthSuccess: false,
    isAuthLoading: false,
    messageAuth: ""
}

interface varAuth {
    email: string;
    password: string;
}

export const LoginUser: any = createAsyncThunk("auth/LoginUser", async(auth : varAuth, thunkAPI) => {
    
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/login', {
            email: auth.email,
            password: auth.password
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error: any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

interface varRegister {
    nik: string;
    absenId: string;
    name: string;
    ganderId: string;
    email: string;
    password: string;
    extention: string;
    nomorHp: string;
    penempatanId: string;
    jabatanId: string;
    atasanId: string;
    nomorKtp: string;
    alamatKtp: string;
    alamatDomisili: string;
    tempatLahir: string;
    tanggalLahir: string;
    nomorNpwp: string;
    statusPerkawinanId: string;
    jumlahAnak: string;
    namaIbu: string;
    pendidikanId: string;
    namaSekolah: string;
    jurusanSekolah: string;
    tahunLulus: string;
    ipk: string;
    nomorBpjsKesehatan: string;
    nomorBpjsKetenagakerjaan: string;
    contactEmergencyId: string;
    emergencyNumber: string;
    emergencyAddress: string;
    nomorSim: string;
    golonganDarahId: string;
    bankId: string;
    nomorRekening: string;
    jamOperasionalId: string;
    groupsId: string;
    quote: string;
}

export const RegisterUser  : any = createAsyncThunk("auth/RegisterUser", async(auth : varRegister, thunkAPI) => {
    console.log('sampai register');
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/register', {
            nik:auth.nik,
            absenId:auth.absenId,
            name:auth.name, 
            ganderId:auth.ganderId, 
            email:auth.email,
            password:auth.password,
            extention:auth.extention,
            nomorHp:auth.nomorHp,
            penempatanId:auth.penempatanId,
            jabatanId:auth.jabatanId,
            atasanId:auth.atasanId,
            nomorKtp:auth.nomorKtp,
            alamatKtp:auth.alamatKtp,
            alamatDomisili:auth.alamatDomisili,
            tempatLahir:auth.tempatLahir,
            tanggalLahir:auth.tanggalLahir,
            nomorNpwp:auth.nomorNpwp,
            statusPerkawinanId:auth.statusPerkawinanId,
            jumlahAnak:auth.jumlahAnak,
            namaIbu:auth.namaIbu,
            pendidikanId:auth.pendidikanId,
            namaSekolah:auth.namaSekolah,
            jurusanSekolah:auth.jurusanSekolah,
            tahunLulus:auth.tahunLulus,
            ipk:auth.ipk,
            nomorBpjsKesehatan:auth.nomorBpjsKesehatan,
            nomorBpjsKetenagakerjaan:auth.nomorBpjsKetenagakerjaan,
            contactEmergencyId:auth.contactEmergencyId,
            emergencyNumber:auth.emergencyNumber,
            emergencyAddress:auth.emergencyAddress,
            nomorSim:auth.nomorSim,
            golonganDarahId:auth.golonganDarahId,
            bankId:auth.bankId,
            nomorRekening:auth.nomorRekening,
            jamOperasionalId:auth.jamOperasionalId,
            groupId:auth.groupsId,
            quote:auth.quote
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

export const LogOut : any = createAsyncThunk("auth/LogOut", async() => {
    await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+'/logout',{
        withCredentials: true, // Now this is was the missing piece in the client side 
    });
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        resetAuth: (state) => initialState
    },
    extraReducers:(builder) => {
        //login
        builder.addCase(LoginUser.pending, (state) => {
            state.isAuthLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.isAuthLoading = false;
            state.isAuthSuccess = true;
            state.auth = action.payload;
        });
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isAuthLoading = false;
            state.isAuthError = true;
            state.messageAuth = action.payload;
        });

        //register
        builder.addCase(RegisterUser.pending, (state) => {
            state.isAuthLoading = true;
        });
        builder.addCase(RegisterUser.fulfilled, (state, action) => {
            state.isAuthLoading = false;
            state.isAuthSuccess = true;
            state.messageAuth = action.payload;
        });
        builder.addCase(RegisterUser.rejected, (state, action) => {
            state.isAuthLoading = false;
            state.isAuthError = true;
            state.messageAuth = action.payload;
        });
    }
})

export const {resetAuth} = authSlice.actions;
export default authSlice.reducer;