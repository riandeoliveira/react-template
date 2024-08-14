import type { ReactElement } from "react";
import { Link } from "../link";

export const Footer = (): ReactElement => {
  return (
    <div className="z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 md:mx-8 flex h-14 justify-center items-center">
        <p className="text-xs md:text-sm leading-loose text-muted-foreground">
          NextJS Template by{" "}
          <Link
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Rian Oliveira
          </Link>
        </p>
      </div>
    </div>
  );
};
