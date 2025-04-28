import { cn } from "@/lib/styles";
import { useState } from "react";

export default function AcordionItem({
  title,
  body,
}: Readonly<{
  title: string;
  body: string;
}>) {
  const [expanded, setExpanded] = useState(false);

  function toggle() {
    setExpanded(!expanded);
  }

  return (
    <li className="flex flex-col w-full gap-4">
      <button
        onClick={toggle}
        className="flex justify-between items-center gap-2"
      >
        <h2 className="text-start text-sm tracking-tight text-surface-text font-bold">
          {title}
        </h2>
        <img
          src={expanded ? "/icon-minus.svg" : "/icon-plus.svg"}
          alt="Toggle acordion item button"
          className="size-8"
        />
      </button>
      <p
        className={cn(
          "text-sm tracking-tight text-surface-text-dimmed",
          !expanded && "hidden"
        )}
      >
        {body}
      </p>
    </li>
  );
}
