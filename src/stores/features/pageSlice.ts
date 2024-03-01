import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./../store";

interface PageState {
    pages: any;
    isPagesLoading: boolean,
    isPagesSuccess: boolean,
    isPagesError: boolean,
}

const initialState: PageState = {
    pages: null,
    isPagesLoading: false,
    isPagesSuccess: false,
    isPagesError: false,
};

export const getPages : any = createAsyncThunk("getPages", async(pages, thunkAPI) => {
    return pages;
});

export const pagesSlice = createSlice({
    name: "pages",
    initialState,
    reducers:{
        resetPages: (state) => initialState
    },
    extraReducers:(builder) => {
        // get pages
        builder.addCase(getPages.pending, (state) => {
            state.isPagesLoading = true;
        });
        builder.addCase(getPages.fulfilled, (state, action) => {
            state.isPagesLoading = false;
            state.isPagesSuccess = true;
            state.pages = action.payload;
        });
        builder.addCase(getPages.rejected, (state, action) => {
            state.isPagesLoading = false;
            state.isPagesError = true;
            state.pages = '';
        })
    }
});

export const {resetPages} = pagesSlice.actions;
export default pagesSlice.reducer;
