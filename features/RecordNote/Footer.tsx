import { Button } from "@/components/ui/button";
import s from "./index.module.scss";
import { LoaderIcon } from "@/icons/LoaderIcon";
import { ButtonGroup } from "@/components/ui/button-group";
import { TagsIcon } from "@/icons/TagsIcon";
import { ListIcon } from "@/icons/ListIcon";

export default function Footer() {
  return (
    <div className={s.footer}>
      <ButtonGroup className={s.buttonGroup}>
        <Button><TagsIcon /></Button>
        <Button><ListIcon /></Button>
      </ButtonGroup>
    </div>
  );
}
