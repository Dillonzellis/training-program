import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import WorkoutList from "@/components/workout/WorkoutList";
import { PPLCrumbs } from "@/data/crumbs";
import { backB, bicepsB } from "@/data/sets";

export default function PPLPull() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <H1 className="pb-8">Pull B</H1>
        <BreadCrumb crumbs={PPLCrumbs} />
        <H2>Biceps B</H2>
        <WorkoutList exerciseList={bicepsB} />
        <H2>Back B</H2>
        <WorkoutList exerciseList={backB} />
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
