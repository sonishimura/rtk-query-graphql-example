import { createApi } from "@reduxjs/toolkit/query/react";
import { ToDo } from "./types";
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

export const toDoApi = createApi({
  reducerPath: "toDoApi",
  baseQuery: graphqlBaseQuery({ baseUrl: "localhost:4000" }),
  endpoints: (builder) => ({
    getToDos: builder.query<ToDo, string>({
      query: () => ({
        document: getToDosDocument,
      }),
    }),
  }),
});

export const { useGetToDosQuery } = toDoApi;
