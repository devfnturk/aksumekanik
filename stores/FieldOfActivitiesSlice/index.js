import { getFieldOfActivities } from "@/services/getMethods";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGetFieldOfActivities = createAsyncThunk('brands/fetchGetFieldOfActivities', async () => {
    const response = await getFieldOfActivities();

    return response;
});

const fieldOfActivitiesSlice = createSlice({
    name: 'fieldOfActivitiesSlice',
    initialState: {
        data: [],
        loading: false,
        error: null,
        lastFetched: 0
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetFieldOfActivities.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetFieldOfActivities.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.lastFetched = Date.now();
            })
            .addCase(fetchGetFieldOfActivities.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            });
    },
});

export default fieldOfActivitiesSlice.reducer;