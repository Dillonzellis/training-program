import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FourDayV2Crumbs } from "@/data/crumbs";
import { backA } from "@/data/sets";

export default function FourDayBack() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <BreadCrumb crumbs={FourDayV2Crumbs} />

        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 max-w-sm">
          Back A
        </h1>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {backA.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
