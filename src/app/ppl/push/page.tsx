import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { PPLCrumbs } from "@/data/crumbs";
import { chest, triceps, shoulders } from "@/data/sets";

export default function PPLPush() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <H1 className="pb-8">Push</H1>

        <BreadCrumb crumbs={PPLCrumbs} />

        <H2>Chest</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {chest.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <H2>Triceps</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {triceps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <H2>Shoulders</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {shoulders.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
