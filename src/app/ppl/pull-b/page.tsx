"use client";

import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import WorkoutList from "@/components/workout/WorkoutList";
import { PPLCrumbs } from "@/data/crumbs";
import { backB, bicepsB } from "@/data/sets";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "ppl-pull-b-checks";

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
          <H1 className="pb-4">PULL_B</H1>
          
          <H2 className="mt-6">BICEPS_B:</H2>
          <WorkoutList
            exerciseList={bicepsB}
            storageKey={STORAGE_KEY}
            onClear={handleClearChecks}
          />
          <H2>BACK_B:</H2>
          <WorkoutList
            exerciseList={backB}
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
