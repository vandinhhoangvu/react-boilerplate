import { baseApi } from './baseApi';

export const todosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => 'todos',
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: 'todos',
        method: 'POST',
        body: todo,
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = todosApi;
