import { Note } from "@/domain/entity/note";
import { sortDirection } from "@/domain/types/sortDirection";
import { INotesRepository } from "@/domain/usecase/interfaces";

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
}
