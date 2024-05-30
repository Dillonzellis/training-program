import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { splits } from "@/data/splits";

//TODO: add auth
//TODO: add waist tracker
//TODO: add workout date tracker (checkbox of days)
//TODO: add sets and weights
//TODO: add V program

export default function Home() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <div>
          <H1 className="pb-6">Training Program</H1>
          <p className="text-sm text-muted-foreground pb-16">1/26/24</p>
          <H2>Splits:</H2>

          <div className="flex flex-col justify-start items-start">
            {/* <Button asChild className="p-0" variant="link"> */}
            {/*   <Link href="/4-day-split">4 Day Split</Link> */}
            {/* </Button> */}
            {splits.map((split, idx) => (
              <Button key={idx} asChild className="p-0" variant="link">
                <Link href={split.href}>{split.name}</Link>
              </Button>
            ))}

            {/* <Button asChild className="p-0" variant="link"> */}
            {/*   <Link href="/ppl">Push/Pull/Legs</Link> */}
            {/* </Button> */}
          </div>
        </div>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
