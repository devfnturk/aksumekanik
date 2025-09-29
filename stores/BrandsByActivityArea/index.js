import { getBrandsByActivityArea } from "@/services/getMethods";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGetBrandsByActivityArea = createAsyncThunk('activityAreasByBrand/fetchGetBrandsByActivityArea', async (activityAreaId) => {
    const response = await getBrandsByActivityArea(activityAreaId);

    return response;
});

const brandsByActivityAreaSlice = createSlice({
    name: 'brandsByActivityAreaSlice',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetBrandsByActivityArea.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetBrandsByActivityArea.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchGetBrandsByActivityArea.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            });
    },
});

export default brandsByActivityAreaSlice.reducer;