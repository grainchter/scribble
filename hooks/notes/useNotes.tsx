
import { getAllNotesByUseCase } from "@/di";
import { Note } from "@/domain/entity/note";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

async function fetchNotes(): Promise<Note[]> {
  return getAllNotesByUseCase("asc");
}

export const useNotes = () => {
  return useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });
};