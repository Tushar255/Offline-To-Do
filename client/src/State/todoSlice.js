import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const id = action.payload.id;
            const content = action.payload.content;
            state.todoList.unshift({
                id,
                content,
                completed: false,
                createdAt: Date.now(),
                completedAt: null,
            });
        },
        completeTodo: (state, action) => {
            const id = action.payload;
            const completedTodoIndex = state.todoList.findIndex((todo) => todo.id === id);

            if (completedTodoIndex !== -1) {
                const completedTodo = state.todoList[completedTodoIndex];
                completedTodo.completed = true;
                completedTodo.completedAt = Date.now();

                state.todoList.sort((a, b) => {
                if (a.completed && !b.completed) {
                    return 1;
                } else if (!a.completed && b.completed) {
                    return -1;
                } else {
                    return b.completedAt - a.completedAt;
                }
                });
            }
        },
        deleteTodoItem: (state, action) => {
            const id = action.payload;
            const itemIndex = state.todoList.findIndex((todo) => todo.id === id);

            if (itemIndex !== -1) {
                state.todoList.splice(itemIndex, 1)[0];
            }
        },
        resetTodos: (state) => {
            state.todoList.splice(0, state.todoList.length);
        }
    },
});

export const { addTodo, completeTodo, deleteTodoItem, resetTodos } = todosSlice.actions;

export default todosSlice;
