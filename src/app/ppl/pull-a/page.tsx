"use client";

import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import WorkoutList from "@/components/workout/WorkoutList";
import { PPLCrumbs } from "@/data/crumbs";
import { backA, bicepsA } from "@/data/sets";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "ppl-pull-a-checks";

export default function PPLPull() {
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
        <div className="font-terminal">
          <H1 className="pb-4">PULL_A</H1>
          
          <H2 className="mt-6">BACK_A:</H2>
          <WorkoutList
            exerciseList={backA}
            storageKey={STORAGE_KEY}
            onClear={handleClearChecks}
          />
          <H2>BICEPS_A:</H2>
          <WorkoutList
            exerciseList={bicepsA}
            storageKey={STORAGE_KEY}
            onClear={handleClearChecks}
          />
          <div className="mt-8 pb-4">
            <Button onClick={handleClearChecks}>
              [CLEAR_ALL]
            </Button>
          </div>
          <BreadCrumb crumbs={PPLCrumbs} />
        </div>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
