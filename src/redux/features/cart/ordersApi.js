import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getBaseUrl} from "../../../utils/baseUrl.js";
//RTK Query management

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/v1/orders`,
    credentials: "include",
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            Headers.set("Authorization", `Bearer ${token}`);
        }
        return Headers;
    }
})

export const ordersApi = createApi({
    reducerPath: "ordersApi",
    baseQuery: baseQuery,
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
        fetchAllOrders: builder.query({
            query: () => `/`,
            providesTags: ['Orders']
        }),
        fetchOrder: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{type: "Orders", id}]
        }),
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: "/create",
                method: "POST",
                body: newOrder,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ['Orders']
        }),
        updateOrder: builder.mutation({
            query: ({id, ...order}) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: order,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ['Orders']
        }),
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Orders']
        }),
        getOrdersByEmail: builder.query({
            query: (email) => `/email/${email}`,
            providesTags:  [ "Orders"]
        }),
    })
})

export const {
    useFetchAllOrdersQuery,
    useFetchOrderByIdQuery,
    useCreateOrderMutation,
    useUpdateOrderMutation,
    useDeleteOrderMutation,
    useGetOrdersByEmailQuery
} = ordersApi