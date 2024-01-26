import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { PPLCrumbs } from "@/data/crumbs";
import { biceps, back } from "@/data/sets";

export default function PPLPull() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <H1 className="pb-8">Pull</H1>

        <BreadCrumb crumbs={PPLCrumbs} />

        <H2>Back</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {back.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <H2>Biceps</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {biceps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
