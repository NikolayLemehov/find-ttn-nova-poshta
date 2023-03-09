import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = process.env.REACT_APP_API_KEY;

export const ttnApi = createApi({
  reducerPath: 'ttnApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.novaposhta.ua/v2.0/json/',
  }),
  tagTypes: 'ttn',
  endpoints: (builder) => ({
    getTtn: builder.mutation({
      query: (ttnValue) => {
        return ({
          url: '/',
          method: 'POST',
          body: {
            apiKey,
            'modelName': 'TrackingDocument',
            'calledMethod': 'getStatusDocuments',
            'methodProperties': {
              'Documents': [
                {
                  'DocumentNumber': ttnValue,
                },
              ],
            },
          },
        });
      },
    }),
  }),
});

export const {
  useGetTtnMutation,
} = ttnApi;
