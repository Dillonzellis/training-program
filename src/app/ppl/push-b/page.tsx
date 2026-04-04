import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import WorkoutList from "@/components/workout/WorkoutList";
import { PPLCrumbs } from "@/data/crumbs";
import { tricepsB, chestB, shouldersB } from "@/data/sets";

export default function PPLPush() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <H1 className="pb-8">Push B</H1>
        <BreadCrumb crumbs={PPLCrumbs} />
        <H2>Chest B</H2>
        <WorkoutList exerciseList={chestB} />
        <H2>Triceps B</H2>
        <WorkoutList exerciseList={tricepsB} />
        <H2>Shoulders B</H2>
        <WorkoutList exerciseList={shouldersB} />
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
