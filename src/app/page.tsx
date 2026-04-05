import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import Link from "next/link";
import { splits } from "@/data/splits";
import { updateDate } from "@/data/globals";

export default function Home() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <div>
          <H1 className="pb-4">Training Program</H1>
          <p className="text-sm text-muted-foreground pb-8">{updateDate}</p>
          <H2 className="mt-4">Splits:</H2>

          <div className="flex flex-col justify-start items-start mt-2">
            {splits.map((split, idx) => (
              <Link 
                key={idx} 
                href={split.href}
                className="text-foreground hover:text-win-title hover:underline py-1"
              >
                {">"} {split.name}
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
