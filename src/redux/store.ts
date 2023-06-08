import { configureStore } from '@reduxjs/toolkit';
import { jsonplaceholderApi } from '../api/jsonplaceholderApi';

export const store = configureStore({
    reducer: {
        [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonplaceholderApi.middleware)
})
