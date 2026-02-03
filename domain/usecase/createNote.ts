import { INotesRepository } from "@/repository/notes.repository";
import { Note } from "../entity/note";
import { createNoteParamsType } from "../types/createNote";

export type TCeateNote = (note: createNoteParamsType) => Promise<Note>;

export const createNote = (
  notesRepository: INotesRepository,
): TCeateNote => {
  return (note: createNoteParamsType): Promise<Note> => {
    return notesRepository.createNote(note);
  };
};
