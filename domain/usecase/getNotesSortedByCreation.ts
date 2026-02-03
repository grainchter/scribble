import { Note } from "../entity/note";
import { sortDirection } from "../types/sortDirection";
import { INotesRepository } from "./interfaces";

export type getAllNotesSortedBy = (direction: sortDirection) => Promise<Note[]>;

export const newGetAllNotesSortedBy = (
  notesRepository: INotesRepository,
): getAllNotesSortedBy => {
  return (direction: sortDirection): Promise<Note[]> => {
    return notesRepository.getAll(direction);
  };
};
