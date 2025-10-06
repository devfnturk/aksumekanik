import { getActivities } from "@/services/getMethods";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGetActivities = createAsyncThunk('activities/fetchGetActivities', async () => {
    const response = await getActivities();

    return response;
});

const activitiesSlice = createSlice({
    name: 'activitiesSlice',
    initialState: {
        data: [],
        loading: false,
        error: null,
        lastFetched: 0
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetActivities.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetActivities.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.lastFetched = Date.now();
            })
            .addCase(fetchGetActivities.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            });
    },
});

export default activitiesSlice.reducer;