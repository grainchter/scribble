"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Header from "./Header";
import s from "./index.module.scss"

const formSchema = z.object({
  title: z
    .string()
    .min(1, "Заголовок заметки не должен быть пустым")
    .max(32, "Слишком длинный заголовок"),
  content: z.string().min(1, "Текст заметки не должен быть пустым"),
});

export default function RecordNote() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <Header isSubmitting={isSubmitting} />
      <div>
        <Input
          id="title"
          type="text"
          placeholder="Короткий заголовок"
          {...register("title")}
        />
        {errors.title && (
          <p>{errors.title.message}</p>
        )}
      </div>

      <div className={s.textarea}>
        <Textarea
          id="description"
          rows={4}
          placeholder="Расскажите подробнее"
          {...register("content")}
        />
        {errors.content && (
          <p>{errors.content.message}</p>
        )}
      </div>
    </form>
  );
}
