import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import fileDownload from "js-file-download";

interface variabel {
    dataPerhitungan: any;
    isPerhitunganError: boolean;
    isPerhitunganSuccess: boolean;
    isPerhitunganLoading: boolean;
    isPerhitunganLoading2: boolean;
    messagePerhitungan: any;
}

const initialState : variabel = {
    dataPerhitungan: null,
    isPerhitunganError: false,
    isPerhitunganSuccess: false,
    isPerhitunganLoading: false,
    isPerhitunganLoading2: false,
    messagePerhitungan: '',
}

export const getPerhitunganByGroupPeriode : any = createAsyncThunk("getPerhitunganByGroupPeriode", async(perhitungan : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/perhitungan/${perhitungan.idGroup}&${perhitungan.idPeriode}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const downloadPerhitunganByGroupPeriode : any = createAsyncThunk("downloadPerhitunganByGroupPeriode", async(perhitungan : any, thunkAPI) => {
    try {
        return axios({
            url:`${import.meta.env.VITE_REACT_APP_API_URL}/perhitungan/${perhitungan.idGroup}&${perhitungan.idPeriode}/export`,
            responseType: 'blob',
            method: 'GET'
        }).then((response)=>{
            fileDownload(response.data, perhitungan.name);
        });
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const perhitunganSlice = createSlice({
    name: "perhitungan",
    initialState,
    reducers:{
        resetPerhitungan: (state) => initialState
    },
    extraReducers:(builder) => {
        // get inOuts
        builder.addCase(getPerhitunganByGroupPeriode.pending, (state) => {
            state.isPerhitunganLoading = true;
        });
        builder.addCase(getPerhitunganByGroupPeriode.fulfilled, (state, action) => {
            state.isPerhitunganLoading = false;
            state.isPerhitunganSuccess = true;
            state.dataPerhitungan = action.payload;
        });
        builder.addCase(getPerhitunganByGroupPeriode.rejected, (state, action) => {
            state.isPerhitunganLoading = false;
            state.isPerhitunganError = true;
            state.messagePerhitungan = action.payload;
        })

        // get inOuts
        builder.addCase(downloadPerhitunganByGroupPeriode.pending, (state) => {
            state.isPerhitunganLoading2 = true;
        });
        builder.addCase(downloadPerhitunganByGroupPeriode.fulfilled, (state, action) => {
            state.isPerhitunganLoading2 = false;
            state.isPerhitunganSuccess = true;
            state.messagePerhitungan = action.payload;
        });
        builder.addCase(downloadPerhitunganByGroupPeriode.rejected, (state, action) => {
            state.isPerhitunganLoading2 = false;
            state.isPerhitunganError = true;
            state.messagePerhitungan = action.payload;
        })
    }
})

export const {resetPerhitungan} = perhitunganSlice.actions;
export default perhitunganSlice.reducer;