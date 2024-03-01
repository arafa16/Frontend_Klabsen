import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    periodeKerjas: any;
    isPeriodeKerjasError: boolean;
    isPeriodeKerjasSuccess: boolean;
    isPeriodeKerjasLoading: boolean;
    messagePeriodeKerjas: any;
}

const initialState : variabel = {
    periodeKerjas: null,
    isPeriodeKerjasError: false,
    isPeriodeKerjasSuccess: false,
    isPeriodeKerjasLoading: false,
    messagePeriodeKerjas: ""
}

export const getPeriodeKerjasTable : any = createAsyncThunk("getPeriodeKerjasTable", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/periode/${jamOperasionals.limit}&${jamOperasionals.page}`,{
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

export const getPeriodeKerjasById : any = createAsyncThunk("getPeriodeKerjasById", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/periode/${jamOperasionals.id}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        console.log(response, 'response');
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const createPeriodeKerjas : any = createAsyncThunk("createPeriodeKerjas", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/periode`,{
            name:jamOperasionals.name,
            bulan:jamOperasionals.bulan,
            tahun:jamOperasionals.tahun,
            tanggalMulai:jamOperasionals.tanggalMulai,
            tanggalSelesai:jamOperasionals.tanggalSelesai,
            jumlahHari:jamOperasionals.jumlahHari,
            code:jamOperasionals.code,
            isActive:jamOperasionals.isActive
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

export const updatePeriodeKerjas : any = createAsyncThunk("updatePeriodeKerjas", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/periode/${jamOperasionals.id}`,{
            name:jamOperasionals.name,
            bulan:jamOperasionals.bulan,
            tahun:jamOperasionals.tahun,
            tanggalMulai:jamOperasionals.tanggalMulai,
            tanggalSelesai:jamOperasionals.tanggalSelesai,
            jumlahHari:jamOperasionals.jumlahHari,
            code:jamOperasionals.code,
            isActive:jamOperasionals.isActive
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

export const periodeKerjasSlice = createSlice({
    name: "periodeKerjas",
    initialState,
    reducers:{
        resetPeriodeKerjas: (state) => initialState
    },
    extraReducers:(builder) => {

        // get jam operasional table
        builder.addCase(getPeriodeKerjasTable.pending, (state) => {
            state.isPeriodeKerjasLoading = true;
        });
        builder.addCase(getPeriodeKerjasTable.fulfilled, (state, action) => {
            state.isPeriodeKerjasLoading = false;
            state.isPeriodeKerjasSuccess = true;
            state.periodeKerjas = action.payload;
        });
        builder.addCase(getPeriodeKerjasTable.rejected, (state, action) => {
            state.isPeriodeKerjasLoading = false;
            state.isPeriodeKerjasError = true;
            state.messagePeriodeKerjas = action.payload;
        });

        // get jam operasional by id
        builder.addCase(getPeriodeKerjasById.pending, (state) => {
            state.isPeriodeKerjasLoading = true;
        });
        builder.addCase(getPeriodeKerjasById.fulfilled, (state, action) => {
            state.isPeriodeKerjasLoading = false;
            state.isPeriodeKerjasSuccess = true;
            state.periodeKerjas = action.payload;
        });
        builder.addCase(getPeriodeKerjasById.rejected, (state, action) => {
            state.isPeriodeKerjasLoading = false;
            state.isPeriodeKerjasError = true;
            state.messagePeriodeKerjas = action.payload;
        });

        // create jam operasional
        builder.addCase(createPeriodeKerjas.pending, (state) => {
            state.isPeriodeKerjasLoading = true;
        });
        builder.addCase(createPeriodeKerjas.fulfilled, (state, action) => {
            state.isPeriodeKerjasLoading = false;
            state.isPeriodeKerjasSuccess = true;
            state.messagePeriodeKerjas = action.payload;
        });
        builder.addCase(createPeriodeKerjas.rejected, (state, action) => {
            state.isPeriodeKerjasLoading = false;
            state.isPeriodeKerjasError = true;
            state.messagePeriodeKerjas = action.payload;
        });

        // update jam operasional
        builder.addCase(updatePeriodeKerjas.pending, (state) => {
            state.isPeriodeKerjasLoading = true;
        });
        builder.addCase(updatePeriodeKerjas.fulfilled, (state, action) => {
            state.isPeriodeKerjasLoading = false;
            state.isPeriodeKerjasSuccess = true;
            state.messagePeriodeKerjas = action.payload;
        });
        builder.addCase(updatePeriodeKerjas.rejected, (state, action) => {
            state.isPeriodeKerjasLoading = false;
            state.isPeriodeKerjasError = true;
            state.messagePeriodeKerjas = action.payload;
        });
    }
})

export const {resetPeriodeKerjas} = periodeKerjasSlice.actions;
export default periodeKerjasSlice.reducer;