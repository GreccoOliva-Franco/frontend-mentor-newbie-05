"use client";

import "client-only";
import Image from "next/image";

import { cn } from "@/lib/styles";
import Separator from "@/components/separator";
import { useMobile } from "@/hooks/is-mobile";

import AcordionItem from "./acordion-item";

interface Faq {
  title: string;
  body: string;
}

export default function App() {
  const { isMobile } = useMobile();
  const faqs: Faq[] = [
    {
      title: "What is Frontend Mentor, and how will it help me?",
      body: "Frontend Mentor offers realistic coding challenges to help developers improve their   frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for   all levels and ideal for portfolio building.",
    },
    {
      title: "Is Frontend Mentor free?",
      body: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      title: "Can I use Frontend Mentor projects in my portfolio?",
      body: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      body: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  return (
    <main className="relative bg-background/10">
      <Image
        src={
          isMobile
            ? "/background-pattern-mobile.svg"
            : "/background-pattern-desktop.svg"
        }
        alt="Some curvy lines without a real pattern"
        className="absolute top-0 -z-1 w-full aspect-auto"
      />
      <div className="z-1 flex flex-col h-screen justify-center items-center p-8">
        <section className="flex flex-col max-w-md p-6 gap-6 rounded-lg bg-surface">
          <div className="flex items-center min-h-7xl gap-6">
            <Image src={"/icon-star.svg"} alt="Star icon" className="size-6" />
            <h1
              className={cn(
                "text-3xl font-bold text-surface-text",
                "md:text-4xl"
              )}
            >
              FAQs
            </h1>
          </div>
          <ul className="flex flex-col gap-4">
            {faqs
              .reduce((acc, item, index) => {
                acc.push(item);

                const lastIndex = faqs.length - 1;
                const shouldRenderSeparator = index !== lastIndex;
                if (shouldRenderSeparator) {
                  acc.push(null);
                }

                return acc;
              }, [] as (Faq | null)[])
              .map((item, index) =>
                item ? (
                  <AcordionItem key={index} {...item} />
                ) : (
                  <Separator key={index} />
                )
              )}
          </ul>
        </section>
      </div>
    </main>
  );
}
