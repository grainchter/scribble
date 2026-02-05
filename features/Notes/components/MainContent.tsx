import { NoteCard } from "@/components/shared/NoteCard/NoteCard";
import s from "./../index.module.scss";

const mockNotes = [
  { title: "hello", description: "world", id: 1 },
  { title: "hello", description: "world", id: 2 },
  { title: "hello", description: "world", id: 3 },
  { title: "hello", description: "world", id: 4 },
  { title: "hello", description: "world", id: 5 },
  { title: "hello", description: "world", id: 6 },
  { title: "hello", description: "world", id: 7 },
  { title: "hello", description: "world", id: 8 },
];

export default function MainContent() {
  return (
    <div className={s.mainContent}>
      <div className={s.notesList}>
        {Array.from({ length: 1000 }, (_, i) => {
          return { id: i, title: "sjsjsjs", description: "bcbcbcb" };
        })?.map(({ title, description, id }, index) => (
          <NoteCard title={title} content={description} key={index} />
        ))}
      </div>
    </div>
  );
}
