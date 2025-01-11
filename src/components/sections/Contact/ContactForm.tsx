"use client";

import Headline from "@/components/ui/Headline";
import sendFormContents from "@/utils/form/handleSubmit";
import React, { useState, useTransition } from "react";

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
      try {
        const validData = await sendFormContents(formData);
        if (!validData) {
          setError("データの検証に失敗しました");
          return;
        }

        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validData),
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
          console.error("API Error:", data);
          setError(data.message || "送信に失敗しました");
          return;
        }

        setResult(true);
        resetForm();
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setResult(false);
      } catch (e) {
        console.error("Submit error:", e);
        setError("エラーが発生しました");
      }
    });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setAge("");
    setError(null);
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
