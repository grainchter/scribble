import { getAllNotesSortedBy, newGetAllNotesSortedBy } from "./domain/usecase/getNotesSortedByCreation";
import { NotesRepository } from "./repository/notes.repository";

const notes = new NotesRepository()
export const getAllNotesBy: getAllNotesSortedBy = newGetAllNotesSortedBy(notes)