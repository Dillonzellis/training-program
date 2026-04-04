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
      className="flex items-center space-x-3 w-full p-3 sm:p-0 rounded-lg sm:rounded-none bg-accent/50 sm:bg-transparent hover:bg-accent sm:hover:bg-transparent transition-colors"
    >
      <Checkbox id={id} checked={checked} className="w-6 h-6 sm:w-4 sm:h-4" />
      <a
        href={`/ppl/${id}`}
        className="text-lg sm:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
    <div>
      <div className="space-y-3 sm:space-y-4 pb-8">
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
        className="w-full sm:w-auto px-6 py-3 sm:py-2 text-base sm:text-sm border rounded-md hover:bg-accent transition-colors"
      >
        Clear Checks
      </button>
    </div>
  );
};
