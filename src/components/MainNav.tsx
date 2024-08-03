import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
// import { splits } from "@/data/splits";

export default function MainNav() {
  return (
    <nav>
      <MaxWidthWrapper>
        <div className="flex items-center justify-between gap-4 border-b pb-2 pt-3 text-sm font-normal">
          <div className="flex items-center lg:gap-8 gap-4">
            <Link className="text-xl lg:pr-24 lg:text-2xl" href="/">
              Training Program
            </Link>

            <Link href="/4-day-split-v2">4 Day Split V2</Link>

            {/* {splits.map((split, idx) => ( */}
            {/*   <Link key={idx} href={split.href}> */}
            {/*     {split.name} */}
            {/*   </Link> */}
            {/* ))} */}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
