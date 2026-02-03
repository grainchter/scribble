import { INotesRepository } from "@/repository/notes.repository";
import { Note } from "../entity/note";
import { createNoteParamsType } from "../types/createNote";

export type createNoteType = (note: createNoteParamsType) => Promise<Note>;

export const createNote = (
  notesRepository: INotesRepository,
): createNoteType => {
  return (note: createNoteParamsType): Promise<Note> => {
    return notesRepository.createNote(note);
  };
};
