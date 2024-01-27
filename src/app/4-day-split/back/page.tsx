import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { FourDayCrumbs } from "@/data/crumbs";
import { back } from "@/data/sets";

export default function FourDayBack() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <H1 className="pb-8">Back</H1>

        <BreadCrumb crumbs={FourDayCrumbs} />

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {back.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
