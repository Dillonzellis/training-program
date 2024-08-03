import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { FourDayV2Crumbs } from "@/data/crumbs";
import { shouldersA, shWarmUp2, chestA } from "@/data/sets";

export default function FourDayChest() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <BreadCrumb crumbs={FourDayV2Crumbs} />

        <H1 className="pb-8">Chest A</H1>

        <H2>Warm-up</H2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {shWarmUp2.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <H2>Chest</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {chestA.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <H2>Shoulders</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {shouldersA.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
