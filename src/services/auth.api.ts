import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from 'src/config';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.api.authUrl }),
  tagTypes: ['Auth'],
  refetchOnFocus: true,

  endpoints: build => ({}),
});

export const {} = authApi;
