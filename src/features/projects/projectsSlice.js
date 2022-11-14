import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../apis/content';

const initialState = {
    projects: [],
    tags: [],
    loading: 'idle', // | 'pending' | 'succeeded' | 'failed',
};

export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    async () => {
        const response = await client.getEntries({ content_type: 'project' });
        return response.items;
    }
);

export const fetchProjectsByTag = createAsyncThunk(
    'projects/fetchProjectsByTag',
    async (tags) => {
        const response = await client.getEntries({
            content_type: 'project',
            'fields.tagsList[match]': tags,
        });
        return response.items;
    }
);

export const fetchTags = createAsyncThunk('projects/fetchTags', async () => {
    const response = await client.getEntries({
        content_type: 'tag',
    });
    return response.items;
});

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
                state.projects = action.payload;
                state.loading = 'succeeded';
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.loading = 'failed';
            })
            .addCase(fetchProjectsByTag.pending, (state, action) => {
                state.loading = 'pending';
            })
            .addCase(fetchProjectsByTag.fulfilled, (state, action) => {
                state.projects = action.payload;
                state.loading = 'succeeded';
            })
            .addCase(fetchProjectsByTag.rejected, (state, action) => {
                state.loading = 'failed';
            })
            .addCase(fetchTags.pending, (state, action) => {
                state.loading = 'pending';
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.tags = action.payload;
                state.loading = 'succeeded';
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.loading = 'failed';
            });
    },
});

export const selectAllProjects = (state) => state.projects.projects;
export const selectTags = (state) => state.projects.tags;
export const getProjectsLoadingStatus = (state) => state.projects.loading;

// export const selectProjectsByTag = (state, tag) => {
//     return state.projects.projects.map((project) => {
//         return project.filter((e) =>
//             e.fields.projectTitle.toLowerCase().includes('crypto')
//         );
//     });
// };

export default projectsSlice.reducer;
