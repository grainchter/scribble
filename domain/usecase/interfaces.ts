import { Note } from "../entity/note";
import { sortDirection } from "../types/sortDirection";

export interface INotesRepository {
    getAll: (direction:sortDirection) => Promise<Note[]>,
}