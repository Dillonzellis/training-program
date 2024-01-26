import Link from "next/link";

export default function MainNav() {
  return (
    <nav>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex items-center justify-between gap-4 border-b pb-2 pt-3 text-sm font-normal">
          <div className="flex items-center">
            <Link
              className="pr-6 font-serif text-xl lg:pr-12 lg:text-2xl"
              href="/"
            >
              Training Program
            </Link>
            <Link href="/ppl">Push/Pull/Legs</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
