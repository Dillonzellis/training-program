"use client";

import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import WorkoutList from "@/components/workout/WorkoutList";
import { PPLCrumbs } from "@/data/crumbs";
import { chestA, tricepsA, shouldersA } from "@/data/sets";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "ppl-push-a-checks";

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
        <H1 className="pb-4">Push A</H1>
        <H2 className="mt-4">Triceps A</H2>
        <WorkoutList
          exerciseList={tricepsA}
          storageKey={STORAGE_KEY}
          onClear={handleClearChecks}
        />
        <H2>Chest A</H2>
        <WorkoutList
          exerciseList={chestA}
          storageKey={STORAGE_KEY}
          onClear={handleClearChecks}
        />
        <H2>Shoulders A</H2>
        <WorkoutList
          exerciseList={shouldersA}
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
