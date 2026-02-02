import { Note } from "@/domain/entity/note";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

async function createNote(data: { title: string; content: string }) {
  return { id: 111, title: "created", content: "wow" };
}

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNote,
    onMutate: async (newNote) => {
      await queryClient.cancelQueries({ queryKey: ["notes"] });
      const prevTodos = queryClient.getQueryData<Note[]>(["notes"]);
      queryClient.setQueryData(["notes"], (old: Note[] | undefined) => {
        if (!old) {
          return [{ ...newNote }];
        }
        return [...old, { ...newNote }];
      });

      return { prevTodos };
    },
    onError: (err, _variables, context) => {
      if (context?.prevTodos) {
        queryClient.setQueryData(["notes"], context.prevTodos);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
};
