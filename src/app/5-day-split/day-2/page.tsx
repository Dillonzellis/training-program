import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { FiveDaySplitCrumbs } from "@/data/crumbs";
import { wSplTuesdayLegs, wSplTuesdayArms, legsWarmUp } from "@/data/sets";

export default function FourDayChest() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <BreadCrumb crumbs={FiveDaySplitCrumbs} />

        <H1 className="pb-8">Tuesday (Lower)</H1>

        <H2>Warm Up</H2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {legsWarmUp.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <H2>Legs</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {wSplTuesdayLegs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <H2>Arms</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {wSplTuesdayArms.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
