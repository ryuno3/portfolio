"use client";

import Headline from "@/components/ui/Headline";
import handleSubmit from "@/utils/form/handleSubmit";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="text-gray-700">
      <Headline title="お問い合わせ" size="m" />

      <form action={handleSubmit}>
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

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          送信
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
