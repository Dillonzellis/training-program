"use client";

import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { Checkbox } from "@/components/ui/checkbox";
import type { CheckType } from "@/data/checks";

interface CheckProps extends CheckType {
  onClick: (id: string) => void;
  checked: boolean;
}

const Check = ({ id, label, onClick, checked }: CheckProps) => {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className="flex items-center space-x-3 w-full p-2 border-2 border-[hsl(180,30%,28%)] border-t-[hsl(182,38%,72%)] border-l-[hsl(182,38%,72%)] border-r-[hsl(180,30%,28%)] border-b-[hsl(180,30%,28%)] bg-secondary hover:bg-muted active:bg-secondary"
    >
      <Checkbox id={id} checked={checked} />
      <a
        href={`/ppl/${id}`}
        className="text-base font-medium leading-none"
        onClick={(e) => e.stopPropagation()}
      >
        {label}
      </a>
    </button>
  );
};

interface SplitCheckboxProps {
  splitChecks: CheckType[];
}

export const SplitCheckbox = ({ splitChecks }: SplitCheckboxProps) => {
  const [checkedState, setCheckedState] = useLocalStorage<{
    [key: string]: boolean;
  }>("checkboxState", {});

  const handleCheck = (id: string) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    const initialState = splitChecks.reduce((acc, check) => {
      if (acc[check.id] === undefined) {
        acc[check.id] = false;
      }
      return acc;
    }, checkedState);

    setCheckedState(initialState);
  }, []);

  const handleClearChecks = () => {
    setCheckedState({});
  };

  return (
    <div className="pb-8">
      <div className="space-y-2 pb-8">
        {splitChecks.map((check) => (
          <Check
            onClick={handleCheck}
            key={check.id}
            checked={!!checkedState[check.id]}
            {...check}
          />
        ))}
      </div>
      <button
        onClick={handleClearChecks}
        className="w-full sm:w-auto px-4 py-1 text-sm border-2 border-[hsl(180,30%,28%)] border-t-[hsl(182,38%,72%)] border-l-[hsl(182,38%,72%)] border-r-[hsl(180,30%,28%)] border-b-[hsl(180,30%,28%)] bg-primary text-primary-foreground hover:bg-accent active:bg-primary"
      >
        Clear Checks
      </button>
    </div>
  );
};
