import React from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { useGetNotes } from './hooks/fetch_notes_hook';
import { NotesModel } from './models/notes_model';

const App: React.FC = () => {
  const fetchNotesQuery = useGetNotes();
  if (fetchNotesQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (fetchNotesQuery.isError) {
    return <p>Error: {(fetchNotesQuery.error as string)}</p>;
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Clays Note Taking App</h1>
      <NoteForm />
      <NoteList notes={fetchNotesQuery.data as NotesModel[]} />
    </div>
  );
}

export default App;
