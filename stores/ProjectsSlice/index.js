import { getProjects } from "@/services/getMethods";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGetProjects = createAsyncThunk('projects/fetchGetProjects', async () => {
    const response = await getProjects();

    return response;
});

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        data: [],
        loading: false,
    error: null,
        completedCount: 0,
        incompleteCount: 0
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetProjects.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetProjects.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;

                const completed = action.payload.filter((item) => item.isCompleted === true).length;
                const incomplete = action.payload.filter((item) => item.isCompleted === false).length;

                state.completedCount = completed;
                state.incompleteCount = incomplete;
            })
            .addCase(fetchGetProjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            });
    },
});

export default projectsSlice.reducer;