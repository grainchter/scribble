import { INotesRepository } from "@/repository/notes.repository";
import { Note } from "../entity/note";
import { sortDirection } from "../types/sortDirection";

export type TGetAllNotesSortedBy = (direction: sortDirection) => Promise<Note[]>;

export const getAllNotesSortedBy = (
  notesRepository: INotesRepository,
): TGetAllNotesSortedBy => {
  return (direction: sortDirection): Promise<Note[]> => {
    return notesRepository.getAll(direction);
  };
};
