import { configureStore } from '@reduxjs/toolkit'
import { dialogueSlice } from "./dialogue"
import { todosSlice } from "./todos"

const store = configureStore({
    reducer: {
        todos: todosSlice.reducer,
        props: dialogueSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const selectTodos = (state: RootState) => state.todos.todos;
export const selectProps = (state: RootState) => state.props.props;
export default store;