import { getData } from "@/services/getMethods";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGetData = createAsyncThunk('data/fetchGetData', async () => {
    const response = await getData();

    return response;
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchGetData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            });
    },
});

export default dataSlice.reducer;