import { Button } from "@/components/ui/button";
import s from "./../index.module.scss";
import { PlusIcon } from "@/icons/PlusIcon";
import { UserIcon } from "@/icons/UserIcon";
import { CalendarDaysIcon } from "@/icons/CalendarDaysIcon";

export default function Footer() {
  return (
    <div className={s.footer}>
      <div>
        <Button variant="outline" size="icon">
          <CalendarDaysIcon />
        </Button>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
        <Button variant="outline" size="icon">
          <UserIcon />
        </Button>
      </div>
    </div>
  );
}
