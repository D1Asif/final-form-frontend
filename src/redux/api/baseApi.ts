import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://final-form-backend.vercel.app/api' }),
    tagTypes: ["products"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`,
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