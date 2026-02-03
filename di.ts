import { createNote, TCeateNote } from "./domain/usecase/createNote";
import { deleteNote, TDeleteNote } from "./domain/usecase/deleteNote";
import { getAllNotesSortedBy, TGetAllNotesSortedBy } from "./domain/usecase/getNotesSortedBy";
import { updateNote, TUpdateNote } from "./domain/usecase/updateNote";
import { NotesRepository } from "./repository/notes.repository";

const notes = new NotesRepository()
export const getAllNotesByUseCase: TGetAllNotesSortedBy = getAllNotesSortedBy(notes)
export const createNoteUseCase: TCeateNote = createNote(notes)
export const updateNoteUseCase: TUpdateNote = updateNote(notes)
export const deleteNoteUseCase: TDeleteNote = deleteNote(notes)