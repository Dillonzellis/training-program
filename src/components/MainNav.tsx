import Link from "next/link";

export default function MainNav() {
  return (
    <nav className="w-full border-b border-[hsl(120,100%,15%)]">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-3">
          <Link 
            className="text-xl font-bold crt-glow-strong font-terminal" 
            href="/"
          >
            TRAINING_PROGRAM
          </Link>
          <div className="flex gap-6 font-terminal text-sm">
            <Link href="/" className="text-[hsl(120,100%,40%)] hover:text-[hsl(120,100%,60%)] transition-colors">
              [HOME]
            </Link>
            <Link href="/ppl" className="text-[hsl(120,100%,40%)] hover:text-[hsl(120,100%,60%)] transition-colors">
              [PPL]
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
