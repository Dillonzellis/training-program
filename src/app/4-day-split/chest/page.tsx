import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FourDayCrumbs } from "@/data/crumbs";
import { chest, shoulders } from "@/data/sets";
import { H2 } from "@/components/typography/H2";

export default function FourDayChest() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <BreadCrumb crumbs={FourDayCrumbs} />
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 max-w-sm">
          Chest
        </h1>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {chest.map((item) => (
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
