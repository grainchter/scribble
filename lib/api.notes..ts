import { Note } from "@/domain/entity/note";
import { createNoteParamsType } from "@/domain/types/createNote";
import { updateNoteParamsType } from "@/domain/types/updateNote";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const notesApi = {
  getAll: async (): Promise<Note[]> => {
    const response = await fetch(`${API_URL}/api/notes`, {
      next: { tags: ['notes'] },
    });
    if (!response.ok) throw new Error('Failed to fetch notes');
    return response.json();
  },

  getById: async (id: number): Promise<Note> => {
    const response = await fetch(`${API_URL}/api/notes/${id}`, {
      next: { tags: [`note-${id}`] },
    });
    if (!response.ok) throw new Error('Failed to fetch note');
    return response.json();
  },

  create: async (data: createNoteParamsType): Promise<Note> => {
    const response = await fetch(`${API_URL}/api/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create note');
    return response.json();
  },

  update: async (id: number, data: updateNoteParamsType): Promise<Note> => {
    const response = await fetch(`${API_URL}/api/notes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update note');
    return response.json();
  },

  delete: async (id: number): Promise<void> => {
    const response = await fetch(`${API_URL}/api/notes/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete note');
  },
};