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
      className="flex items-center space-x-3 w-full p-2 border border-[hsl(120,100%,20%)] hover:border-[hsl(120,100%,40%)] hover:shadow-glow-sm transition-all"
    >
      <Checkbox id={id} checked={checked} />
      <a
        href={`/ppl/${id}`}
        className="text-base font-medium leading-none font-terminal text-[hsl(120,100%,45%)]"
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
        className="px-4 py-1 border border-[hsl(120,100%,30%)] text-[hsl(120,100%,50%)] hover:bg-[hsl(120,100%,50%)] hover:text-[hsl(120,100%,2%)] hover:shadow-glow transition-all font-terminal"
      >
        [CLEAR]
      </button>
    </div>
  );
};
