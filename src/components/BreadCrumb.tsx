import React from "react";

import Link from "next/link";
import type { CrumbType } from "@/data/crumbs";

const Crumb = ({ name, href }: CrumbType) => {
  return (
    <Link
      className="underline-offset-4 hover:underline text-sm font-medium leading-none"
      href={href}
    >
      {name}
    </Link>
  );
};

interface BreadCrumbProps {
  crumbs: CrumbType[];
}

export const BreadCrumb = ({ crumbs }: BreadCrumbProps) => {
  return (
    <div className="flex md:flex-row flex-col md:gap-2 gap-4 md:items-center pb-8">
      {crumbs.map((item, idx) => (
        <React.Fragment key={idx}>
          <Crumb name={item.name} href={item.href} />
          {idx !== crumbs.length - 1 && (
            <span className="hidden md:block">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
