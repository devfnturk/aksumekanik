import { getProjectFields } from "@/services/getMethods";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGetProjectFields = createAsyncThunk('projectFields/fetchGetProjectFields', async () => {
    const response = await getProjectFields();

    return response;
});

const projectFieldsSlice = createSlice({
    name: 'projectFields',
    initialState: {
        data: [],
        loading: false,
    error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetProjectFields.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetProjectFields.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchGetProjectFields.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            });
    },
});

export default projectFieldsSlice.reducer;