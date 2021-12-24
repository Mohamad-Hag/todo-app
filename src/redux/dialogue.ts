import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Dialogue ---
interface DialogueSliceState
{
    props: any,
}
const initialState: DialogueSliceState = {
    props: {
        open: false,
        text: "",
    }
};

export const dialogueSlice = createSlice({
    name: "dialogue",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.props.text = action.payload;            
        },
        open: (state, action: PayloadAction<string>) => {
            state.props.open = true;
            state.props.text = action.payload;            
        },
        close: (state) =>
        {
            state.props.open = false;
            state.props.text = "";
        }, 
    }
});

export const { open, close, setText } = dialogueSlice.actions;