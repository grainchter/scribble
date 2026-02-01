import { Note } from "./domain/entity/note";
import { newGetAllNotesScenario } from "./domain/scenario/getAllNotesScenario";
import { getNotesSortedByCreationType } from "./domain/scenario/interfaces";
import { newGetNotesSortedByCreation } from "./domain/usecase/getNotesSortedByCreation";
import { NotesRepository } from "./repository/notes.repository";

const notes = new NotesRepository()
export const getNotesSortedByCreation: getNotesSortedByCreationType = newGetNotesSortedByCreation(notes)
export const getAllNotesScenario = await newGetAllNotesScenario(getNotesSortedByCreation)