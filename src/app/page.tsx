import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { splits } from "@/data/splits";
import { updateDate } from "@/data/globals";

//TODO: add auth
//TODO: add workout date tracker (checkbox of days)
//TODO: add sets and weights
//TODO: add V program

export default function Home() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <div>
          <H1 className="pb-6">Training Program</H1>
          <p className="text-sm text-muted-foreground pb-16">{updateDate}</p>
          <H2>Splits:</H2>

          <div className="flex flex-col justify-start items-start">
            {/* <Button asChild className="p-0" variant="link"> */}
            {/*   <Link href="/4-day-split-v2">4 Day Split V2</Link> */}
            {/* </Button> */}
            {splits.map((split, idx) => (
              <Button key={idx} asChild className="p-0" variant="link">
                <Link href={split.href}>{split.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
