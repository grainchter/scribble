"use client";

import Lottie from "lottie-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import s from "./index.module.scss";
import { useNotes } from "@/hooks/notes/useNotes";
import { useRouter } from "next/navigation";

export default function Notes() {
  const { data, isLoading } = useNotes();
  const router = useRouter();

  const handleCreateNoteNavigate = () => {
    router.push("/create");
  };

  const handleSettingsNavigate = () => {
    router.push("/settings");
  };

  const handleCalendarNavigate = () => {
    router.push("/calendar");
  };

  return (
    <div className={s.notes}>
      <div className={s.bg}>
        <div className={s.bgWrapper}></div>
        {/* <Lottie animationData={meteor} loop={true} className={s.lottie} /> */}
      </div>
      <Header />
      <MainContent />
      <Footer handleSettingsNavigate={handleSettingsNavigate} handleCreateNavigate={handleCreateNoteNavigate} handleCalendarNavigate={handleCalendarNavigate}/>
    </div>
  );
}
