import { getBrands } from "@/services/getMethods";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGetBrands = createAsyncThunk('brands/fetchGetBrands', async () => {
    const response = await getBrands();

    return response;
});

const brandsSlice = createSlice({
    name: 'brandsSlice',
    initialState: {
        data: [],
        loading: false,
        error: null,
        lastFetched: 0
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetBrands.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetBrands.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.lastFetched = Date.now();
            })
            .addCase(fetchGetBrands.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            });
    },
});

export default brandsSlice.reducer;