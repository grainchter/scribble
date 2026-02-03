import { Note } from "@/domain/entity/note";
import { createNoteParamsType } from "@/domain/types/createNote";

import { sortDirection } from "@/domain/types/sortDirection";
import { updateNoteParamsType } from "@/domain/types/updateNote";

export interface INotesRepository {
  getAll: (direction: sortDirection) => Promise<Note[]>;
  createNote: (note: createNoteParamsType) => Promise<Note>;
  updateNote: (note: updateNoteParamsType) => Promise<Note>;
  deleteNote: (id: number) => Promise<null>;
}

export class NotesRepository implements INotesRepository {
  async getAll(direction: sortDirection): Promise<Note[]> {
    const notes = [
      {
        id: 123,
        title: "world",
        content: "jkdejdkd",
      },
      {
        id: 123,
        title: "world",
        content: "jkdejdkd",
      },
    ];
    await fetch("https://dogapi.dog/api/v1/facts?number=2")
      .then((response) => response.json())
      .then((data) =>
        notes.push({ id: 555, title: data?.facts?.[1], content: "" }),
      );

    return notes?.map((note) => new Note(note));
  }

  async createNote(note: createNoteParamsType): Promise<Note> {
    return { ...note, id: 1234 };
  }

  async updateNote(note: updateNoteParamsType): Promise<Note> {
    return { ...note, title: "updated title", content: "createdTitle" };
  }

  async deleteNote(id: number): Promise<null> {
    return null;
  }
}
