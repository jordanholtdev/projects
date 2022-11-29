import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../features/projects/projectsSlice';

export const store = configureStore({
    reducer: {
        projects: projectReducer,
    },
});
