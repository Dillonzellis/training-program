import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
// import { splits } from "@/data/splits";

export default function MainNav() {
  return (
    <nav>
      <MaxWidthWrapper>
        <div className="flex items-center justify-between gap-4 border-b pb-2 pt-3 text-sm font-normal">
          <Link className="text-xl lg:pr-24 lg:text-2xl" href="/">
            Training Program
          </Link>
          <Link href="/ppl">PPL</Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
