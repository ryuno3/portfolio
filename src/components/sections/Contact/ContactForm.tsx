"use client";

import Headline from "@/components/ui/Headline";
import sendFormContents from "@/utils/form/handleSubmit";
import React, { useState, useTransition } from "react";
import { ContactFormData } from "@/../types/form/type";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubit = async (formData: FormData) => {
    startTransition(async () => {
      setName("");
      setEmail("");
      setMessage("");
      setAge("");

      const validData: ContactFormData | undefined = await sendFormContents(formData);
      if (!validData) {
        // handle the case where validData is undefined
        setError("送信に失敗しました");
        return;
      }

      const { name, age, email, message } = validData;

      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, email, message }),
      });

      setResult(true);
      await setTimeout(() => setResult(false), 3000);
    });
  };

  return (
    <div className="text-gray-700">
      <Headline title="お問い合わせ" size="m" />

      <form action={handleSubit}>
        <div className="flex flex-col space-y-3">
          <label htmlFor="name">お名前</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-3">
          {/* 年齢 */}
          <label htmlFor="age">年齢</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-3">
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-3">
          <label htmlFor="message">お問い合わせ内容</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        {result ? (
          <p>送信が完了しました</p>
        ) : (
          <button
            type="submit"
            disabled={isPending}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {isPending ? "送信中" : "送信"}
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
