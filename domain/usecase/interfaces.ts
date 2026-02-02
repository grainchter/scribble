import { Note } from "../entity/note";
import { createNote } from "../types/createNote";
import { sortDirection } from "../types/sortDirection";

export interface INotesRepository {
  getAll: (direction: sortDirection) => Promise<Note[]>;
  createNote: (note: createNote) => Promise<Note>;
}
