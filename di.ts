import { newGetAllNotesService } from "./domain/services/getAllNotesService";
import { getNotesSortedByCreationType } from "./domain/services/interfaces";
import { newGetNotesSortedByCreation } from "./domain/usecase/getNotesSortedByCreation";
import { NotesRepository } from "./repository/notes.repository";

const notes = new NotesRepository()
export const getNotesSortedByCreation: getNotesSortedByCreationType = newGetNotesSortedByCreation(notes)
export const getAllNotesService = await newGetAllNotesService(getNotesSortedByCreation)