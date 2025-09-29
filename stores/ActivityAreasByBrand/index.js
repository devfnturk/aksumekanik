import { getActivityAreasByBrand } from "@/services/getMethods";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGetActivityAreasByBrand = createAsyncThunk('activityAreasByBrand/fetchGetActivityAreasByBrand', async (brandId) => {
    const response = await getActivityAreasByBrand(brandId);

    return response;
});

const activityAreasByBrandSlice = createSlice({
    name: 'activityAreasByBrandSlice',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetActivityAreasByBrand.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetActivityAreasByBrand.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchGetActivityAreasByBrand.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            });
    },
});

export default activityAreasByBrandSlice.reducer;