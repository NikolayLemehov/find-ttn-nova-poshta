import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = process.env.REACT_APP_API_KEY;

export const warehouseApi = createApi({
  reducerPath: 'warehouseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.novaposhta.ua/v2.0/json/',
  }),
  tagTypes: 'warehouse',
  endpoints: (builder) => ({
    getAllWarehouse: builder.mutation({
      query: ({page = 0, pageSize = 10}) => {
        return ({
          url: '/',
          method: 'POST',
          body: {
            apiKey,
            'modelName': 'Address',
            'calledMethod': 'getWarehouses',
            'methodProperties': {
              Page: page,
              Limit: pageSize,
              'Language': 'UA',
            },
          },
        });
      },
    }),
  }),
});

export const {
  useGetAllWarehouseMutation,
} = warehouseApi;
