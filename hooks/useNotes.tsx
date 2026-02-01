import { getAllNotesScenario } from "@/di";
import { Note } from "@/domain/entity/note";
import { useQuery } from "@tanstack/react-query";

async function fetchNotes(): Promise<Note[]> {
  return getAllNotesScenario("asc");
}

export const useNotes = () => {
  return useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });
};
