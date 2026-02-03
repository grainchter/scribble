import { INotesRepository } from "@/repository/notes.repository";

export type deleteNoteType = (id: number) => Promise<null>;

export const deleteNote = (
  notesRepository: INotesRepository,
): deleteNoteType => {
  return (id: number): Promise<null> => {
    return notesRepository.deleteNote(id);
  };
};
