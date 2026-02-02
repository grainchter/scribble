import { Note } from "../entity/note";
import { sortDirection } from "../types/sortDirection";

export type getNotesSortedByCreationType = (direction: sortDirection) => Promise<Note[]>
