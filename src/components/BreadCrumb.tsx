import React from "react";

import Link from "next/link";
import type { CrumbType } from "@/data/crumbs";

const Crumb = ({ name, href }: CrumbType) => {
  return (
    <Link
      className="underline-offset-4 text-sm hover:underline md:text-base font-medium leading-none flex-nowrap"
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
    <div className="flex gap-2 items-center pb-2 flex-nowrap overflow-scroll">
      {crumbs.map((item, idx) => (
        <React.Fragment key={idx}>
          <Crumb name={item.name} href={item.href} />
          {idx !== crumbs.length - 1 && <span className="block">|</span>}
        </React.Fragment>
      ))}
    </div>
  );
};
