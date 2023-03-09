import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [],
    totalNotes: 0,
    status: 'No Note(s)'
}

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote(state, action) {
            const newNote = action.payload;
            // const existingNote = state.notes.find(note => note.id === newNote.id);
            state.notes.push({
                title: newNote.title,
                date: newNote.date,
                collection: newNote.collection,
                content: newNote.content
            });
        },

        // deleteNote(state, action) {
        //     const id = action.payload;
        //     state.notes = state.notes.filter(note => note.id !== id);
        // },
    }
});

export const noteActions = noteSlice.actions;

export default noteSlice