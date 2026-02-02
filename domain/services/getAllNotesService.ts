import { sortDirection } from "../types/sortDirection";
import { getNotesSortedByCreationType } from "./interfaces";

export const newGetAllNotesService = async (
  getNotesSortedByCreationUseCase: getNotesSortedByCreationType,
) => {
  return (direction: sortDirection) => {
    let notes = getNotesSortedByCreationUseCase(direction);
    return notes;
  };
};
