import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import WorkoutList from "@/components/workout/WorkoutList";
import { PPLCrumbs } from "@/data/crumbs";
import { chestA, tricepsA, shouldersA } from "@/data/sets";

export default function PPLPush() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <H1 className="pb-8">Push A</H1>
        <BreadCrumb crumbs={PPLCrumbs} />
        <H2>Triceps A</H2>
        <WorkoutList exerciseList={tricepsA} />
        <H2>Chest A</H2>
        <WorkoutList exerciseList={chestA} />
        <H2>Shoulders A</H2>
        <WorkoutList exerciseList={shouldersA} />
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
