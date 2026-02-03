import { createNote, createNoteType } from "./domain/usecase/createNote";
import { deleteNote, deleteNoteType } from "./domain/usecase/deleteNote";
import { getAllNotesSortedBy, getAllNotesSortedByType } from "./domain/usecase/getNotesSortedBy";
import { updateNote, updateNoteType } from "./domain/usecase/updateNote";
import { NotesRepository } from "./repository/notes.repository";

const notes = new NotesRepository()
export const getAllNotesByService: getAllNotesSortedByType = getAllNotesSortedBy(notes)
export const createNoteService: createNoteType = createNote(notes)
export const updateNoteService: updateNoteType = updateNote(notes)
export const deleteNoteService: deleteNoteType = deleteNote(notes)