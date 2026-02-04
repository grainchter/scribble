import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import s from "./index.module.scss";

type FeatureCardProps = {
  title: string;
  content: string;
};

export function NoteCard({ title, content }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
    // <div className={s.container}>
    //   <div className={s.title}>{title}</div>
    //   <div className={s.content}>{content}</div>
    // </div>
  );
}
