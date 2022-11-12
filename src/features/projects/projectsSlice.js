import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../apis/content';

const initialState = {
    projects: [],
    loading: 'idle', // | 'pending' | 'succeeded' | 'failed',
};

export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    async () => {
        const response = await client.getEntries({ content_type: 'project' });
        console.log(response);
        return response.items;
    }
);

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProjects.pending, (state, action) => {
                state.loading = 'pending';
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.projects.push(action.payload);
                state.loading = 'succeeded';
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.loading = 'failed';
            });
    },
});

export const selectAllProjects = (state) => state.projects.projects;
export const getProjectsLoadingStatus = (state) => state.projects.loading;

export default projectsSlice.reducer;
