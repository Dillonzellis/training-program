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
        <div className="font-terminal">
          <H1 className="pb-2">TRAINING_PROGRAM</H1>
          <p className="text-sm text-[hsl(120,100%,30%)] pb-8">{updateDate}</p>
          
          <div className="mb-6 text-[hsl(120,100%,25%)]">{"/* SELECT PROGRAM */"}</div>
          
          <H2 className="mb-4">AVAILABLE_SPLITS:</H2>

          <div className="flex flex-col space-y-1">
            {splits.map((split, idx) => (
              <Link 
                key={idx} 
                href={split.href}
                className="text-[hsl(120,100%,40%)] hover:text-[hsl(120,100%,60%)] py-1 transition-colors"
              >
                <span className="text-[hsl(120,100%,25%)] mr-2">{">"}</span>
                {split.name.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
