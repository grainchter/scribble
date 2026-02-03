import { updateNoteUseCase } from "@/di";
import { Note } from "@/domain/entity/note";
import { updateNoteParamsType } from "@/domain/types/updateNote";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

async function updateNote(data: updateNoteParamsType) {
  return await updateNoteUseCase(data); 
}

export const useUpdateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateNote,
    onMutate: async (patch) => {
      await queryClient.cancelQueries({ queryKey: ['notes'] });

      const prevNotes = queryClient.getQueryData<Note[]>(['notes']);

      queryClient.setQueryData<Note[]>(['notes'], (old) => {
        if (!old) return old;
        return old.map((note) =>
          note.id === patch.id ? { ...note, ...patch } : note,
        );
      });

      return { prevNotes };
    },

    onError: (_err, _vars, context) => {
      if (context?.prevNotes) {
        queryClient.setQueryData(['notes'], context.prevNotes);
      }
    },
    onSuccess: (updatedNote) => {
      queryClient.setQueryData<Note[]>(['notes'], (old) => {
        if (!old) return [updatedNote];
        return old.map((note) =>
          note.id === updatedNote.id ? updatedNote : note,
        );
      });
      queryClient.setQueryData<Note>(['notes', updatedNote.id], updatedNote);
    },
  });
};

