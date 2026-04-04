import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import WorkoutList from "@/components/workout/WorkoutList";
import { PPLCrumbs } from "@/data/crumbs";
import { backA, bicepsA } from "@/data/sets";

export default function PPLPull() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <H1 className="pb-8">Pull A</H1>
        <BreadCrumb crumbs={PPLCrumbs} />
        <H2>Back A</H2>
        <WorkoutList exerciseList={backA} />
        <H2>Biceps A</H2>
        <WorkoutList exerciseList={bicepsA} />
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
