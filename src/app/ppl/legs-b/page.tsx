import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { PPLCrumbs } from "@/data/crumbs";
import { legsB } from "@/data/sets";

export default function PPLLegs() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <H1 className="pb-8">Legs B</H1>

        <BreadCrumb crumbs={PPLCrumbs} />

        <H2>Legs B(hamstring focus)</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {legsB.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
