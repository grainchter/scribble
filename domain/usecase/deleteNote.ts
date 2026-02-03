import { INotesRepository } from "@/repository/notes.repository";

export type TDeleteNote = (id: number) => Promise<null>;

export const deleteNote = (
  notesRepository: INotesRepository,
): TDeleteNote => {
  return (id: number): Promise<null> => {
    return notesRepository.deleteNote(id);
  };
};
