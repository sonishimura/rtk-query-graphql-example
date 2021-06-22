export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createToDo?: Maybe<ToDo>;
  updateToDo?: Maybe<ToDo>;
};


export type MutationCreateToDoArgs = {
  id: Scalars['String'];
  title: Scalars['String'];
};


export type MutationUpdateToDoArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  toDos: Array<ToDo>;
};

export type ToDo = {
  __typename?: 'ToDo';
  id: Scalars['String'];
  title: Scalars['String'];
};

export type GetToDosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetToDosQuery = (
  { __typename?: 'Query' }
  & { toDos: Array<(
    { __typename?: 'ToDo' }
    & Pick<ToDo, 'id' | 'title'>
  )> }
);
