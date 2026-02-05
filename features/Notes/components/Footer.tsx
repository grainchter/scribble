import { Button } from "@/components/ui/button";
import s from "./../index.module.scss";
import { PlusIcon } from "@/icons/PlusIcon";
import { UserIcon } from "@/icons/UserIcon";
import { CalendarDaysIcon } from "@/icons/CalendarDaysIcon";
import { useDeleteNote } from "@/hooks/notes/useDeleteNote";

interface footerProps {
  handleCreateNavigate: (value: any) => void,
  handleSettingsNavigate: () => void,
  handleCalendarNavigate: () => void

}

export default function Footer({handleCreateNavigate, handleCalendarNavigate, handleSettingsNavigate}: footerProps) {
  return (
    <div className={s.footer}>
      <div>
        <Button variant="outline" size="icon" onClick={handleCalendarNavigate}>
          <CalendarDaysIcon />
        </Button>
        <Button variant="outline" size="icon" onClick={handleCreateNavigate}>
          <PlusIcon />
        </Button>
        <Button variant="outline" size="icon" onClick={handleSettingsNavigate}>
          <UserIcon />
        </Button>
      </div>
    </div>
  );
}
