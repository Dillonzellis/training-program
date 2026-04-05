import Link from "next/link";

export default function MainNav() {
  return (
    <nav className="w-full bg-primary border-b-2 border-t-[hsl(165,30%,90%)] border-l-transparent border-r-transparent border-b-[hsl(160,40%,30%)]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between gap-4 py-2">
          <Link 
            className="text-[hsl(160,50%,10%)] text-lg lg:text-xl font-bold hover:text-[hsl(165,30%,15%)] transition-colors" 
            href="/"
          >
            Training Program
          </Link>
          <div className="flex gap-4 text-[hsl(160,50%,15%)] text-sm font-medium">
            <Link href="/" className="hover:text-[hsl(165,30%,15%)] transition-colors">Home</Link>
            <Link href="/ppl" className="hover:text-[hsl(165,30%,15%)] transition-colors">PPL</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
