"use client";

import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import WorkoutList from "@/components/workout/WorkoutList";
import { PPLCrumbs } from "@/data/crumbs";
import { legsB } from "@/data/sets";
import { useLocalStorage } from "usehooks-ts";

const STORAGE_KEY = "ppl-legs-b-checks";

export default function PPLLegs() {
  const [, setCheckedState] = useLocalStorage<Record<string, boolean>>(STORAGE_KEY, {});

  const handleClearChecks = () => {
    setCheckedState({});
  };

  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <H1 className="pb-4 sm:pb-8">Legs B</H1>
        <BreadCrumb crumbs={PPLCrumbs} />
        <H2 className="mb-4 sm:mb-8">Legs B(hamstring focus)</H2>
        <WorkoutList exerciseList={legsB} storageKey={STORAGE_KEY} onClear={handleClearChecks} />
        <div className="mt-8 pb-4">
          <button
            onClick={handleClearChecks}
            className="w-full sm:w-auto px-6 py-3 sm:py-2 text-base sm:text-sm border rounded-md hover:bg-accent transition-colors"
          >
            Clear Checks
          </button>
        </div>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
