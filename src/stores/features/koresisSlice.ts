import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    koreksis: any;
    koreksisTable: any;
    isKoreksisError: boolean;
    isKoreksisSuccess: boolean;
    isKoreksisLoading: boolean;
    messageKoreksis: any;
}

const initialState : variabel = {
    koreksis: null,
    koreksisTable: null,
    isKoreksisError: false,
    isKoreksisSuccess: false,
    isKoreksisLoading: false,
    messageKoreksis: ""
}

export const createKoreksis: any = createAsyncThunk("createKoreksis", async(koreksis : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/koreksis`,{
            userId : koreksis.userId, 
            inOutId :  koreksis.inOutId, 
            keterangan : koreksis.keterangan, 
            codeStatusKoreksi : koreksis.codeStatusKoreksi, 
            isActive : koreksis.isActive,
            codeStatusInout : koreksis.codeStatusInout,
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

export const createKoreksisByDate: any = createAsyncThunk("createKoreksisByDate", async(koreksis : any, thunkAPI) => {

    // userId, tanggalMulai, codeTipeAbsen, codePelanggaran, keterangan, codeStatusKoreksi, isActive, codeStatusInout
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/koreksis/byDate`,{
            userId:koreksis.userId,
            tanggalMulai:koreksis.tanggalMulai,
            tanggalSelesai:koreksis.tanggalSelesai,
            tipeAbsenId:koreksis.tipeAbsenId,
            codePelanggaran:koreksis.codePelanggaran,
            codeStatusInout:koreksis.codeStatusInout,
            codeStatusKoreksi:koreksis.codeStatusKoreksi,
            jamOperasionalId:koreksis.jamOperasionalId,
            keterangan:koreksis.keterangan,
            isAbsenWeb:koreksis.isAbsenWeb,
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

export const updateKoreksis: any = createAsyncThunk("updateKoreksis", async(koreksis : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/koreksis/${koreksis.id}`,{
            userId : koreksis.userId, 
            inOutId :  koreksis.inOutId, 
            keterangan : koreksis.keterangan, 
            codeStatusKoreksi : koreksis.codeStatusKoreksi, 
            isActive : koreksis.isActive,
            codeStatusInout : koreksis.codeStatusInout,
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

export const approverKoreksis: any = createAsyncThunk("approverKoreksis", async(koreksis : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/koreksis/${koreksis.id}/approve`,{
            statusKoreksiId : koreksis.codeStatusKoreksi,
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

export const getKoreksisById: any = createAsyncThunk("getKoreksisById", async(koreksis : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/koreksis/${koreksis.id}`,{
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

export const getKoreksisTableByUser: any = createAsyncThunk("getKoreksisTableByUser", async(koreksis : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/koreksis/${koreksis.limit}&${koreksis.page}&${koreksis.id}&${koreksis.statusCode}`,{
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

export const getKoreksisByUser: any = createAsyncThunk("getKoreksisByUser", async(koreksis : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/koreksis/${koreksis.id}/user`,{
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

export const getKoreksisTableByApprover: any = createAsyncThunk("getKoreksisTableByApprover", async(koreksis : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/koreksis/${koreksis.limit}&${koreksis.page}&${koreksis.id}&${koreksis.statusCode}/approver`,{
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

export const getKoreksisByApprover: any = createAsyncThunk("getKoreksisByApprover", async(koreksis : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/koreksis/${koreksis.id}/approver`,{
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

export const koreksisSlice = createSlice({
    name: "koreksis",
    initialState,
    reducers:{
        resetKoreksis: (state) => initialState
    },
    extraReducers:(builder) => {
        
        // create koreksi
        builder.addCase(createKoreksis.pending, (state) => {
            state.isKoreksisLoading = true;
        });
        builder.addCase(createKoreksis.fulfilled, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisSuccess = true;
            state.messageKoreksis = action.payload;
        });
        builder.addCase(createKoreksis.rejected, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisError = true;
            state.messageKoreksis = action.payload;
        })

        // create koreksi
        builder.addCase(createKoreksisByDate.pending, (state) => {
            state.isKoreksisLoading = true;
        });
        builder.addCase(createKoreksisByDate.fulfilled, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisSuccess = true;
            state.messageKoreksis = action.payload;
        });
        builder.addCase(createKoreksisByDate.rejected, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisError = true;
            state.messageKoreksis = action.payload;
        })

        // create koreksi
        builder.addCase(updateKoreksis.pending, (state) => {
            state.isKoreksisLoading = true;
        });
        builder.addCase(updateKoreksis.fulfilled, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisSuccess = true;
            state.messageKoreksis = action.payload;
        });
        builder.addCase(updateKoreksis.rejected, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisError = true;
            state.messageKoreksis = action.payload;
        })

        // get koreksi by id
        builder.addCase(getKoreksisById.pending, (state) => {
            state.isKoreksisLoading = true;
        });
        builder.addCase(getKoreksisById.fulfilled, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisSuccess = true;
            state.koreksis = action.payload;
        });
        builder.addCase(getKoreksisById.rejected, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisError = true;
            state.messageKoreksis = action.payload;
        })

        // get koreksi table by user
        builder.addCase(getKoreksisTableByUser.pending, (state) => {
            state.isKoreksisLoading = true;
        });
        builder.addCase(getKoreksisTableByUser.fulfilled, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisSuccess = true;
            state.koreksisTable = action.payload;
        });
        builder.addCase(getKoreksisTableByUser.rejected, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisError = true;
            state.messageKoreksis = action.payload;
        })

        // get koreksi table by user
        builder.addCase(getKoreksisByUser.pending, (state) => {
            state.isKoreksisLoading = true;
        });
        builder.addCase(getKoreksisByUser.fulfilled, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisSuccess = true;
            state.koreksis = action.payload;
        });
        builder.addCase(getKoreksisByUser.rejected, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisError = true;
            state.messageKoreksis = action.payload;
        })

        // get koreksi table by approver
        builder.addCase(getKoreksisTableByApprover.pending, (state) => {
            state.isKoreksisLoading = true;
        });
        builder.addCase(getKoreksisTableByApprover.fulfilled, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisSuccess = true;
            state.koreksisTable = action.payload;
        });
        builder.addCase(getKoreksisTableByApprover.rejected, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisError = true;
            state.messageKoreksis = action.payload;
        })

        // get koreksi by approver
        builder.addCase(getKoreksisByApprover.pending, (state) => {
            state.isKoreksisLoading = true;
        });
        builder.addCase(getKoreksisByApprover.fulfilled, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisSuccess = true;
            state.koreksis = action.payload;
        });
        builder.addCase(getKoreksisByApprover.rejected, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisError = true;
            state.messageKoreksis = action.payload;
        })

        // get koreksi by approver
        builder.addCase(approverKoreksis.pending, (state) => {
            state.isKoreksisLoading = true;
        });
        builder.addCase(approverKoreksis.fulfilled, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisSuccess = true;
            state.messageKoreksis = action.payload;
        });
        builder.addCase(approverKoreksis.rejected, (state, action) => {
            state.isKoreksisLoading = false;
            state.isKoreksisError = true;
            state.messageKoreksis = action.payload;
        })


    }
})

export const {resetKoreksis} = koreksisSlice.actions;
export default koreksisSlice.reducer;