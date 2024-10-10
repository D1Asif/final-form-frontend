import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://final-form-backend.vercel.app/api' }),
    tagTypes: ["products"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (query) => {
                const queryParams = new URLSearchParams(query);
                return {
                    url: `/products?${queryParams.toString()}`,
                    method: 'GET'
                }
            },
            serializeQueryArgs: ({ queryArgs }) => {
                const newQueryArgs = { ...queryArgs };
                if (newQueryArgs.page) {
                    delete newQueryArgs.page;
                }
                return newQueryArgs;
            },
            merge: (currentCache, newItems) => {
                if (newItems?.data?.length === 0) {
                    return {
                        ...currentCache,
                        ...newItems,
                        allFetched: true,
                        data: [...currentCache.data, ...newItems.data]
                    };
                }
                if (currentCache.data) {
                    return {
                        ...currentCache,
                        ...newItems,
                        data: [...currentCache.data, ...newItems.data]
                    };
                }
                return newItems;
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },
            providesTags: ["products"]
        }),
        getProductById: builder.query({
            query: (productId) => `/products/${productId}`,
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: `/products`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["products"]
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: `/products/${data.productId}`,
                method: 'PUT',
                body: data.body
            }),
            invalidatesTags: ["products"]
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `/products/${productId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["products"]
        })
    }),
})

export const { useGetProductsQuery, useGetProductByIdQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } = baseApi;