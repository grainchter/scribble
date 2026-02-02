import { getAllNotesService } from "@/di";
import { Note } from "@/domain/entity/note";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

async function fetchNotes(): Promise<Note[]> {
  return getAllNotesService("asc");
}

export const useNotes = () => {
  return useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });
};