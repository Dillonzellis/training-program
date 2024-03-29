import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { FourDayCrumbs, PPLCrumbs } from "@/data/crumbs";
import { legs } from "@/data/sets";

export default function FourDayLegs() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <BreadCrumb crumbs={FourDayCrumbs} />
        <H1 className="pb-8">Legs</H1>

        <H2>Warmup</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>3 Sets of Sleigh Push/Pulls</li>
        </ul>

        <H2>Overall Legs</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {legs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
