import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import projectReducer from '../features/projects/projectsSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        projects: projectReducer,
    },
});
