import { getReferences } from "@/services/getMethods";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGetReferences = createAsyncThunk('references/fetchGetReferences', async () => {
    const response = await getReferences();

    return response;
});

const referencesSlice = createSlice({
    name: 'referencesSlice',
    initialState: {
        data: [],
        loading: false,
    error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetReferences.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetReferences.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchGetReferences.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            });
    },
});

export default referencesSlice.reducer;