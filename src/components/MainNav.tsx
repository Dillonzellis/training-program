import Link from "next/link";

export default function MainNav() {
  return (
    <nav>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex items-center justify-between gap-4 border-b pb-2 pt-3 text-sm font-normal">
          <div className="flex items-center gap-8">
            <Link className="pr-6 text-xl lg:pr-24 lg:text-2xl" href="/">
              Training Program
            </Link>
            <Link href="/ppl" className="hover:text-muted-foreground">
              Push/Pull/Legs
            </Link>
            <Link
              href="/four-day-split"
              className="hover:text-muted-foreground"
            >
              4 Day Split
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
