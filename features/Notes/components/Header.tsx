import { SearchIcon } from "@/icons/SearchIcon";
import s from "./../index.module.scss";
import { ArrowDownUpIcon } from "@/icons/ArrowDownUpIcon";

export default function Header() {
  return <div className={s.header}>
    <div className={s.search}><SearchIcon /></div>
    <div className={s.sort}><ArrowDownUpIcon /></div>
  </div>;
}
