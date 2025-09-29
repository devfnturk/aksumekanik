import { getCommunications } from "@/services/getMethods";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGetCommunications = createAsyncThunk('references/fetchGetCommunications', async () => {
    const response = await getCommunications();

    return response;
});

const communicationsSlice = createSlice({
    name: 'communicationsSlice',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetCommunications.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetCommunications.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchGetCommunications.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            });
    },
});

export default communicationsSlice.reducer;