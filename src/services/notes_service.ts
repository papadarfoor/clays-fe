import api from '../api';
import { NotesModel } from '../models/notes_model';


export class NotesService {

  async fetchNotes():Promise<NotesModel[]> {
    const response = await api.get('/notes/');
    return response.data.map((element:Record<string,any>)=>new NotesModel(element));
  };

}

