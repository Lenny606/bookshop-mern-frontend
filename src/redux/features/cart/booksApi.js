import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getBaseUrl} from "../../../utils/baseUrl.js";
//RTK Query management

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/v1/books`,
    credentials: "include",
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            Headers.set("Authorization", `Bearer ${token}`);
        }
        return Headers;
    }
})

export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: baseQuery,
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query: () => `/`,
            providesTags: ['Books']
        }),
        fetchBook: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{type: "Books", id}]
        }),
        addBook: builder.mutation({
            query: (newBook) => ({
                url: "/create",
                method: "POST",
                body: newBook,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ['Books']
        }),
        updateBook: builder.mutation({
            query: ({id, ...book}) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: book,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ['Books']
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Books']
        })
    })
})

export const {
    useFetchAllBooksQuery,
    useFetchBookByIdQuery,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation
} = booksApi