import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPostResponse, IPostResponses } from '../interfaces/interfaces';

export const jsonplaceholderApi = createApi({
    reducerPath: 'jsonplaceholderApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query<number, void>({
            query: () => `posts`,
            transformResponse: (response: IPostResponses) => response[5].id
        }),
        getPostById: builder.query<IPostResponse, number>({
            query: (id) => `posts/${id}`,
        })
    }),
})

export const { useGetPostsQuery, useGetPostByIdQuery } = jsonplaceholderApi