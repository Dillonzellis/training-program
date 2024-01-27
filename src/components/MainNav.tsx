import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function MainNav() {
  return (
    <nav>
      <MaxWidthWrapper>
        <div className="flex items-center justify-between gap-4 border-b pb-2 pt-3 text-sm font-normal">
          <div className="flex items-center lg:gap-8 gap-4">
            <Link className="text-xl lg:pr-24 lg:text-2xl" href="/">
              Training Program
            </Link>
            <Link href="/4-day-split" className="hover:text-muted-foreground">
              4 Day Split
            </Link>
            <Link href="/ppl" className="hover:text-muted-foreground">
              Push/Pull/Legs
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
