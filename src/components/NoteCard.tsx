import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { Note } from '../types'; // Adjust to your Note type definition

interface NoteCardProps {
  note: Note;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);
  const queryClient = useQueryClient();

  const { mutate: editNote } = useMutation(
    (updatedNote: Note) => axios.put(`/api/notes/${note.id}/`, updatedNote),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('notes'); // Invalidate 'notes' query to refetch data
        setIsEditing(false);
      },
    }
  );

  const handleEdit = () => {
    editNote(editedNote);
  };

  return (
    <div className="border rounded shadow p-4">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedNote.title}
            onChange={(e) => setEditedNote({ ...editedNote, title: e.target.value })}
            className="w-full mb-2 px-3 py-2 border rounded"
          />
          <textarea
            value={editedNote.content}
            onChange={(e) => setEditedNote({ ...editedNote, content: e.target.value })}
            className="w-full mb-2 px-3 py-2 border rounded"
          />
          <button onClick={handleEdit} className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold">{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={() => setIsEditing(true)} className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Edit
          </button>
          <button
            onClick={() => {
              axios.delete(`/api/notes/${note.id}/`).then(() => {
                queryClient.invalidateQueries('notes'); // Invalidate 'notes' query to refetch data
              });
            }}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default NoteCard;
