import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../apis/content';

const initialState = {
    projects: [],
    tags: [],
    selectedTag: 'git',
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
    reducers: {
        updateSelectedTag: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.selectedTag = action.payload;
        },
    },
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
export const { updateSelectedTag } = projectsSlice.actions;
export const selectAllProjects = (state) => state.projects.projects;
export const selectTags = (state) => state.projects.tags;
export const getProjectsLoadingStatus = (state) => state.projects.loading;

export const selectProjectsByTag = (state) => {
    return Object.entries(state.projects.projects).filter((proj) =>
        proj[1].fields.tagsList.includes(
            state.projects.selectedTag.toLowerCase()
        )
    );
};

export default projectsSlice.reducer;
