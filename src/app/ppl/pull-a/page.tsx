import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { PPLCrumbs } from "@/data/crumbs";
import { backA, bicepsA } from "@/data/sets";

export default function PPLPull() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <H1 className="pb-8">Pull A</H1>

        <BreadCrumb crumbs={PPLCrumbs} />

        <H2>Back A</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {backA.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <H2>Biceps A</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {bicepsA.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
