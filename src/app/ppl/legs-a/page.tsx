import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import WorkoutList from "@/components/workout/WorkoutList";
import { PPLCrumbs } from "@/data/crumbs";
import { legsA } from "@/data/sets";

export default function PPLLegs() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <H1 className="pb-8">Legs A</H1>
        <BreadCrumb crumbs={PPLCrumbs} />
        <H2>Legs A(quad focused)</H2>
        <WorkoutList exerciseList={legsA} />
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
