import { Note } from "../entity/note";
import { getNotesSortedByCreationType } from "../scenario/interfaces";
import { sortDirection } from "../types/sortDirection";
import { INotesRepository } from "./interfaces";

export const newGetNotesSortedByCreation = (
  notesRepository: INotesRepository,
): getNotesSortedByCreationType => {
  return (direction: sortDirection): Promise<Note[]> => {
    return notesRepository.getAll(direction);
  };
};
