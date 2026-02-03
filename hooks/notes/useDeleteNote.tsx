import { deleteNoteUseCase } from "@/di";
import { Note } from "@/domain/entity/note";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function deleteNote(id: number) {
  return await deleteNoteUseCase(id); 
}

export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNote,
    onSuccess: (_data, id) => {      
      queryClient.setQueryData<Note[]>(['notes'], (old) => {
        if (!old) return old;
        return old.filter((note) => note.id !== id);
      });
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });
};


