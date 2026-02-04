import { Button } from "@/components/ui/button";
import s from "./index.module.scss";
import { LoaderIcon } from "@/icons/LoaderIcon";

interface IRecordNoteHeader {
  isSubmitting: boolean;
}

export default function Header({ isSubmitting }: IRecordNoteHeader) {
  return (
    <div className={s.header}>
      <Button type="submit">
        {isSubmitting ? <div className={s.spinner}><LoaderIcon /></div> : "Сохранить"}
      </Button>
    </div>
  );
}
