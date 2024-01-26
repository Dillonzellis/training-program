import React from "react";

import Link from "next/link";
import type { CrumbType } from "@/data/crumbs";

const Crumb = ({ name, href }: CrumbType) => {
  return (
    <div className="text-sm font-medium leading-none">
      <Link href={href}>{name}</Link>
    </div>
  );
};

interface BreadCrumbProps {
  crumbs: CrumbType[];
}

export const BreadCrumb = ({ crumbs }: BreadCrumbProps) => {
  return (
    <div className="flex gap-2 items-center pb-8">
      {crumbs.map((item, idx) => (
        <React.Fragment key={idx}>
          <Crumb name={item.name} href={item.href} />
          {idx !== crumbs.length - 1 && <span>|</span>}
        </React.Fragment>
      ))}
    </div>
  );
};
