// src/App.tsx
import React from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Clays Note Taking App</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
}

export default App;
