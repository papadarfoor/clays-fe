import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../store/notesSlice';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const NoteForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNote = { id: Date.now(), title, content };
    dispatch(addNote(newNote));
    setTitle('');
    setContent('');
  };

  return (
    <Card className="mb-4 p-4">
      <form onSubmit={handleSubmit}>
        <Input 
          className="w-full mb-2"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea 
          className="w-full mb-2"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" className="mt-2">Add Note</Button>
      </form>
    </Card>
  );
}

export default NoteForm;