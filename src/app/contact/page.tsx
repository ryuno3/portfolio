import ContactForm from "@/components/sections/Contact/ContactForm";
import Headline from "@/components/ui/Headline";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center p-3 pt-[10vh]">
      <Headline title="Contact" size="l" />

      <p className=" italic p-2">お仕事依頼、お問い合わせはこちらから</p>
      <p className=" text-sm ">※案件のご依頼もメールで承ります</p>
      <main className=" w-full my-5 bg-white p-5 rounded-lg shadow-lg">
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;
