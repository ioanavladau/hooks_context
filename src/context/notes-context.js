import React from 'react';

// this object has to be available in both the file that provides things and the one that consumes things
// use it with NotesContext.Provider as a wrapper and provide it with value={ anything we need to share }
// when we want to consume, we use the useContext hook to access the data
const NotesContext = React.createContext()

export { NotesContext as default }