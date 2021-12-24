import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Todo ---
interface TodosSliceState
{
    todos: Array<any>;
};

const initialState: TodosSliceState = {
    todos: [],
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<any>) =>
        {            
            let payload = action.payload;
            let text = payload.text;
            let type = payload.type;
            let timestamp = payload.timestamp;
            let id = state.todos.length + 1;

            if (!text || text === "" || state.todos.includes(payload)) return;

            state.todos.push({
                id: id,
                text: text,
                type: type,
                timestamp: timestamp
            });                        
        },
        edit: (state, action: PayloadAction<any>) =>
        {
            let payload = action.payload;
            let id = payload.id;
            let text = payload.text;
            let type = payload.type;

            state.todos.forEach((t) =>
            {
                if (t.id === id)
                {
                    t.text = text;
                    t.type = type;
                }
            });
        },
        remove: (state, action: PayloadAction<number>) =>
        {
            state.todos = state.todos.filter(t => t.id != action.payload);
        },
        mark: (state, action: PayloadAction<any>) =>
        {

        },        
    },
})


export const { add, edit, remove, mark } = todosSlice.actions;