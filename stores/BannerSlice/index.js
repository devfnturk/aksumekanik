import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners } from '@/services/getMethods';

export const fetchGetBanners = createAsyncThunk('branches/fetchGetBanners', async () => {
    const response = await getBanners();

    return response;
});

const bannerSlice = createSlice({
    name: 'bannerSlice',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetBanners.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetBanners.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchGetBanners.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            });
    },
});

export default bannerSlice.reducer;
