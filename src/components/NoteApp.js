import React, { useState, useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';

const NoteApp = () => {
    // const notesData = JSON.parse(localStorage.getItem('notes'));
    // const [notes, setNotes] = useState(notesData || []);
  
  
    // const [notes, setNotes] = useState([]);
                          // [] - initial state
    const [notes, dispatch] = useReducer(notesReducer, []);
    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
  
    useEffect(() => { // fetching data from a db
      const notes = JSON.parse(localStorage.getItem('notes'));
      console.log("Read data from localStorage");
  
      if (notes) {
        dispatch({ type: 'POPULATE_NOTES', notes: notes })
        // setNotes(notesData);
      }
    }, [])
  
    useEffect(() => {
      console.log("useEffect was called");
      localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes]);

  
    return (
      <NotesContext.Provider value={{ notes, dispatch }}>
        <h1>Notes</h1>
        <NoteList />
        <AddNoteForm />
      </NotesContext.Provider>
    )
}

export { NoteApp as default }