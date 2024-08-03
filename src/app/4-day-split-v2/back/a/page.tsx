import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { FourDayV2Crumbs } from "@/data/crumbs";
import { backA } from "@/data/sets";

export default function FourDayBack() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <BreadCrumb crumbs={FourDayV2Crumbs} />

        <H1 className="pb-8">Back A</H1>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {backA.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
