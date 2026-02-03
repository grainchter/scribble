import { createNoteUseCase } from "@/di";
import { Note } from "@/domain/entity/note";
import { createNoteParamsType } from "@/domain/types/createNote";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

async function createNote(data: createNoteParamsType) {
  return await createNoteUseCase(data);
}

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNote,
    onMutate: async (newNote: createNoteParamsType) => {
      await queryClient.cancelQueries({ queryKey: ["notes"] });
      const prevTodos = queryClient.getQueryData<Note[]>(["notes"]);
      queryClient.setQueryData(["notes"], (old: Note[] | undefined) => {
        if (!old) {
          return [{ ...newNote, id: -Date.now() }];
        }
        return [...old, { ...newNote, id: -Date.now() }];
      });

      return { prevTodos };
    },
    onError: (err, _variables, context) => {
      if (context?.prevTodos) {
        queryClient.setQueryData(["notes"], context.prevTodos);
      }
    },
    onSuccess: (createdNote) => {
      queryClient.setQueryData<Note[]>(["notes"], (old) => {
        if (!old) return [createdNote];
        return [...old.filter((n) => n.id > 0), createdNote];
      });
    },
  });
};
