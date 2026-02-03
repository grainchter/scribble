import { Button } from "@/components/ui/button";
import s from "./../index.module.scss";
import { PlusIcon } from "@/icons/PlusIcon";
import { UserIcon } from "@/icons/UserIcon";
import { CalendarDaysIcon } from "@/icons/CalendarDaysIcon";
import { useDeleteNote } from "@/hooks/notes/useDeleteNote";

interface footerProps {
  handleCreate: (value: any) => void
}

export default function Footer({handleCreate}: footerProps) {
  return (
    <div className={s.footer}>
      <div>
        <Button variant="outline" size="icon">
          <CalendarDaysIcon />
        </Button>
        <Button variant="outline" size="icon" onClick={handleCreate}>
          <PlusIcon />
        </Button>
        <Button variant="outline" size="icon">
          <UserIcon />
        </Button>
      </div>
    </div>
  );
}
