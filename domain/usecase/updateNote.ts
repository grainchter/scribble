import { Note } from "../entity/note";
import { updateNoteParamsType } from "../types/updateNote";
import { INotesRepository } from "@/repository/notes.repository";

export type TUpdateNote = (note: updateNoteParamsType) => Promise<Note>;

export const updateNote = (
  notesRepository: INotesRepository,
): TUpdateNote => {
  return (note: updateNoteParamsType): Promise<Note> => {
    return notesRepository.updateNote(note);
  };
};
