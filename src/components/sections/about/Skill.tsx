import Headline from "@/components/ui/Headline";
import React from "react";
import Language from "@/components/ui/Language";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFlutter,
  SiSupabase,
  SiPrisma,
} from "react-icons/si";
const Skill = () => {
  return (
    <div>
      <section className=" border-2 border-white rounded-lg p-2 pb-10">
        <header>
          <Headline title="言語 | フレームワーク|ツール" />
        </header>
        <article className="flex flex-col">
          <ul className="flex-1 md:flex flex-row  gap-2">
            <div className="flex flex-col gap-2 mt-2">
              <li className="flex flex-row ">
                <Language language="React" level={2} icon={<FaReact />} />
              </li>
              <li className="flex flex-row ">
                <Language
                  language="TypeScript"
                  level={1}
                  icon={<SiTypescript />}
                />
              </li>
              <li className="flex flex-row">
                <Language language="Next.js" level={1} icon={<SiNextdotjs />} />
              </li>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <li className="flex flex-row">
                <Language language="Flutter" level={1} icon={<SiFlutter />} />
              </li>
              <li className="flex flex-row">
                <Language language="Supabase" level={1} icon={<SiSupabase />} />
              </li>
              <li className="flex flex-row">
                <Language language="Prisma " level={1} icon={<SiPrisma />} />
              </li>
            </div>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Skill;
