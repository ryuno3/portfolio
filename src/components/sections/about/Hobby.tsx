import Headline from "@/components/ui/Headline";
import Image from "next/image";
import React from "react";

const Hobby = () => {
  return (
    <>
      <section>
        <Headline title="Snowboard" size="m" />

        {/* スノボ */}
        <article className="flex flex-col md:flex-row my-3 gap-2 items-center relative">
          <Image
            src={"/hobby_snowboard.jpeg"}
            alt="snowboard"
            width={200}
            height={150}
            className="rounded-md"
          />
          <p className="font-maru font-bold">
            大学生で初めて行ってから大ハマり。(笑)
            <br />
            もともとスケートボードをしていたこともあり、
            <br />
            今では毎年冬になると出かけます。
          </p>
        </article>
      </section>
      <section>
        <Headline title="Guitar" size="m" />

        {/* ギター */}
        <article className="flex flex-col md:flex-row my-3 gap-2 items-center">
          <Image
            src={"/hobby_guitar.jpeg"}
            alt="guitar"
            width={200}
            height={200}
            className="rounded-md"
          />
          <p className="font-maru font-bold">
            同じ趣味の父の影響で中学生の頃始めました。
            <br />
            いつまでも上達せず下手なままですが、
            <br />
            ストレス解消にもなり今でもよく触ります。
          </p>
        </article>
      </section>
    </>
  );
};

export default Hobby;
