import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-6">
            Training Program
          </h1>
          <p className="text-sm text-muted-foreground pb-16">1/26/24</p>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Splits:
          </h2>

          <div className="flex flex-col justify-start items-start">
            <Button asChild className="p-0" variant="link">
              <Link href="/ppl">Push/Pull/Legs</Link>
            </Button>

            <Button asChild className="p-0" variant="link">
              <Link href="/4-day-split">4 Day Split</Link>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
