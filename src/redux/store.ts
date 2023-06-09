import { configureStore } from '@reduxjs/toolkit';
import { jsonplaceholderApi } from '../api/jsonplaceholderApi';
import authSlice from './slices/authSlice';
import masterSlice from './slices/masterSlice';

export const store = configureStore({
    reducer: {
        [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
        auth: authSlice,
        master: masterSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonplaceholderApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch