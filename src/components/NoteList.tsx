import NoteCard from './NoteCard';
import { NotesModel } from '../models/notes_model';

interface NoteItems {
  notes : NotesModel[];
}

function NoteList({notes}: NoteItems)  {
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map((note: any) => ( // Adjust note type based on your API response structure
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
