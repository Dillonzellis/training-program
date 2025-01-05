import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { PPLCrumbs } from "@/data/crumbs";
import { tricepsB, chestB, shouldersB } from "@/data/sets";

export default function PPLPush() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <H1 className="pb-8">Push B</H1>

        <BreadCrumb crumbs={PPLCrumbs} />

        <H2>Triceps B</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {tricepsB.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <H2>Chest B</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {chestB.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <H2>Shoulders B</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {shouldersB.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
