import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Note, updateNote, deleteNote } from '../store/notesSlice';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface NoteCardProps {
  note: Note;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(updateNote(editedNote));
    setIsEditing(false);
  };

  return (
    <Card className="p-4 border rounded shadow">
      {isEditing ? (
        <div>
          <Input 
            className="w-full mb-2"
            value={editedNote.title}
            onChange={(e) => setEditedNote({ ...editedNote, title: e.target.value })}
          />
          <Textarea 
            className="w-full mb-2"
            value={editedNote.content}
            onChange={(e) => setEditedNote({ ...editedNote, content: e.target.value })}
          />
          <Button onClick={handleEdit} className="mr-2">Save</Button>
          <Button onClick={() => setIsEditing(false)} variant="secondary">Cancel</Button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold">{note.title}</h2>
          <p>{note.content}</p>
          <Button onClick={() => setIsEditing(true)} variant="outline" className="mr-2">Edit</Button>
          <Button onClick={() => dispatch(deleteNote(note.id))}>Delete</Button>
        </div>
      )}
    </Card>
  );
}

export default NoteCard;