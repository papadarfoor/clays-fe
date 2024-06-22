// src/components/NoteList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import NoteCard from './NoteCard';

const NoteList: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map(note => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
