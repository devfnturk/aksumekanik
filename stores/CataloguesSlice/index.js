import { getCatalogues } from "@/services/getMethods";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGetCatalogues = createAsyncThunk('catalogues/fetchGetCatalogues', async () => {
    const response = await getCatalogues();

    return response;
});

const cataloguesSlice = createSlice({
    name: 'cataloguesSlice',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetCatalogues.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetCatalogues.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchGetCatalogues.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            });
    },
});

export default cataloguesSlice.reducer;