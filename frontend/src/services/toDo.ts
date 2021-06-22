import { createApi } from "@reduxjs/toolkit/query/react";
import {
  CreateToDoMutation,
  CreateToDoMutationVariables,
  GetToDosQuery,
} from "./types";
import { gql } from "graphql-request";

import { graphqlBaseQuery } from "./baseQuery";

const getToDosDocument = gql`
  query getToDos {
    toDos {
      id
      title
    }
  }
`;

const createToDoDocument = gql`
  mutation createToDo($title: String!) {
    createToDo(title: $title) {
      id
      title
    }
  }
`;

export const toDoApi = createApi({
  reducerPath: "toDoApi",
  baseQuery: graphqlBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getToDos: builder.query<GetToDosQuery, void>({
      query: () => ({
        document: getToDosDocument,
      }),
    }),
    createToDo: builder.mutation<
      CreateToDoMutation,
      CreateToDoMutationVariables
    >({
      query: ({ title }) => ({
        document: createToDoDocument,
        variables: {
          title,
        },
      }),
    }),
  }),
});

export const { useGetToDosQuery, useCreateToDoMutation } = toDoApi;
