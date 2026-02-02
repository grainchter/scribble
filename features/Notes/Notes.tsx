"use client";

import Lottie from "lottie-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import s from "./index.module.scss";
import meteor from "./../../animations/meteor.json";
import { useNotes } from "@/hooks/notes/useNotes";

export default function Notes() {
  const { data, isLoading } = useNotes();

  return (
    <div className={s.notes}>
      <div className={s.bg}>
        <div className={s.bgWrapper}></div>
        <Lottie animationData={meteor} loop={true} className={s.lottie} />
      </div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
