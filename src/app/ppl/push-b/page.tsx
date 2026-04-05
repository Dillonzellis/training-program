"use client";

import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import WorkoutList from "@/components/workout/WorkoutList";
import { PPLCrumbs } from "@/data/crumbs";
import { tricepsB, chestB, shouldersB } from "@/data/sets";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "ppl-push-b-checks";

export default function PPLPush() {
  const [, setCheckedState] = useLocalStorage<Record<string, boolean>>(
    STORAGE_KEY,
    {},
  );

  const handleClearChecks = () => {
    setCheckedState({});
  };

  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <H1 className="pb-4">Push B</H1>
        <H2 className="mt-4">Chest B</H2>
        <WorkoutList
          exerciseList={chestB}
          storageKey={STORAGE_KEY}
          onClear={handleClearChecks}
        />
        <H2>Triceps B</H2>
        <WorkoutList
          exerciseList={tricepsB}
          storageKey={STORAGE_KEY}
          onClear={handleClearChecks}
        />
        <H2>Shoulders B</H2>
        <WorkoutList
          exerciseList={shouldersB}
          storageKey={STORAGE_KEY}
          onClear={handleClearChecks}
        />
        <div className="mt-8 pb-4">
          <Button onClick={handleClearChecks}>
            Clear Checks
          </Button>
        </div>
        <BreadCrumb crumbs={PPLCrumbs} />
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
