import s from "./index.module.scss";

type FeatureCardProps = {
  title: string;
  content: string;
};

export function NoteCard({ title, content }: FeatureCardProps) {
  return (
    <div className={s.container}>
      <div className={s.title}>{title}</div>
      <div className={s.content}>{content}</div>
    </div>
  );
}
