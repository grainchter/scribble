import { INotesRepository } from "@/repository/notes.repository";
import { Note } from "../entity/note";
import { sortDirection } from "../types/sortDirection";

export type getAllNotesSortedByType = (direction: sortDirection) => Promise<Note[]>;

export const getAllNotesSortedBy = (
  notesRepository: INotesRepository,
): getAllNotesSortedByType => {
  return (direction: sortDirection): Promise<Note[]> => {
    return notesRepository.getAll(direction);
  };
};
