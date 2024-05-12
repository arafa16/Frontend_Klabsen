import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    auth: any;
    meData: any;
    dataToken:any;
    isAuthError: boolean;
    isAuthSuccess: boolean;
    isMeAuthSuccess: boolean;
    isAuthLoading: boolean;
    messageAuth: any;
    messageMeData: any;
}

const initialState : variabel = {
    auth: null,
    meData: null,
    dataToken: null,
    isAuthError: false,
    isAuthSuccess: false,
    isMeAuthSuccess: false,
    isAuthLoading: false,
    messageAuth: '',
    messageMeData: '',
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

export const SendEmailForgot : any = createAsyncThunk("auth/SendEmailForgot", async(auth : any, thunkAPI) => {
    console.log('error');
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/resetByEmail', {
            email: auth.email
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        console.log(response, 'error try');

        return response.data;
    } catch (error: any) {
        if(error.response){
            console.log(error.response, 'error response');
            const message = `${error.response.statusText}`;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const VerifyToken : any = createAsyncThunk("auth/VerifyToken", async(auth : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/verifyToken/'+auth.token,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error: any) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
});

export const ResetPasswordByToken : any = createAsyncThunk("auth/ResetPasswordByToken", async(auth : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/reset/'+auth.token, {
            password: auth.password,
            confPassword: auth.confPassword,
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        console.log(response, 'error');

        return response.data.msg;
    } catch (error: any) {
        if(error.response){
            console.log(error, 'error');
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const RegisterUser  : any = createAsyncThunk("auth/RegisterUser", async(auth : any, thunkAPI) => {
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
            groupId:auth.groupId,
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

export const getMe : any = createAsyncThunk("user/getMe", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/me',{
            withCredentials: true, // Now this is was the missing piece in the client side 
            // headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
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

        // get me
        builder.addCase(getMe.pending, (state) => {
            state.isAuthLoading = true;
        });

        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isAuthLoading = false;
            state.isMeAuthSuccess = true;
            state.meData = action.payload;
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.isAuthLoading = false;
            state.isAuthError = true;
            state.messageMeData = action.payload;
        })

        //register
        builder.addCase(RegisterUser.pending, (state) => {
            state.isAuthLoading = true;
        });
        builder.addCase(RegisterUser.fulfilled, (state, action) => {
            state.isAuthLoading = false;
            state.isMeAuthSuccess = true;
            state.messageAuth = action.payload;
        });
        builder.addCase(RegisterUser.rejected, (state, action) => {
            state.isAuthLoading = false;
            state.isAuthError = true;
            state.messageAuth = action.payload;
        });

        //register
        builder.addCase(LogOut.pending, (state) => {
            state.isAuthLoading = true;
        });
        builder.addCase(LogOut.fulfilled, (state, action) => {
            state.isAuthLoading = false;
            state.isAuthSuccess = false;
            state.isMeAuthSuccess = false;
            state.isAuthError = true;
            state.auth = null;
            // state.messageAuth = null;
        });
        builder.addCase(LogOut.rejected, (state, action) => {
            state.isAuthLoading = false;
            
        });

        //forgot password
        builder.addCase(SendEmailForgot.pending, (state) => {
            state.isAuthLoading = true;
        });
        builder.addCase(SendEmailForgot.fulfilled, (state, action) => {
            state.isAuthLoading = false;
            state.isAuthSuccess = true;
            state.messageAuth = action.payload;
        });
        builder.addCase(SendEmailForgot.rejected, (state, action) => {
            state.isAuthLoading = false;
            state.isAuthError = true;
            state.messageAuth = action.payload;
        });

        //forgot password
        builder.addCase(VerifyToken.pending, (state) => {
            state.isAuthLoading = true;
        });
        builder.addCase(VerifyToken.fulfilled, (state, action) => {
            state.isAuthLoading = false;
            state.isAuthSuccess = true;
            state.dataToken = action.payload;
        });
        builder.addCase(VerifyToken.rejected, (state, action) => {
            state.isAuthLoading = false;
            state.isAuthError = true;
            state.dataToken = action.payload;
        });

        //forgot password
        builder.addCase(ResetPasswordByToken.pending, (state) => {
            state.isAuthLoading = true;
        });
        builder.addCase(ResetPasswordByToken.fulfilled, (state, action) => {
            state.isAuthLoading = false;
            state.isAuthSuccess = true;
            state.messageAuth = action.payload;
        });
        builder.addCase(ResetPasswordByToken.rejected, (state, action) => {
            state.isAuthLoading = false;
            state.isAuthError = true;
            state.messageAuth = action.payload;
        });
    }
})

export const {resetAuth} = authSlice.actions;
export default authSlice.reducer;