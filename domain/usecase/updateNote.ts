import { Note } from "../entity/note";
import { updateNoteParamsType } from "../types/updateNote";
import { INotesRepository } from "@/repository/notes.repository";

export type updateNoteType = (note: updateNoteParamsType) => Promise<Note>;

export const updateNote = (
  notesRepository: INotesRepository,
): updateNoteType => {
  return (note: updateNoteParamsType): Promise<Note> => {
    return notesRepository.updateNote(note);
  };
};
