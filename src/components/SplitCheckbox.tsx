"use client";

import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { Checkbox } from "@/components/ui/checkbox";
import { fourDayChecks } from "@/data/4DayChecks";
import type { CheckType } from "@/data/4DayChecks";

interface CheckProps extends CheckType {
  onClick: (id: string) => void;
  checked: boolean;
}

const Check = ({ id, label, onClick, checked }: CheckProps) => {
  return (
    <div className="flex items-center space-x-2" onClick={() => onClick(id)}>
      <Checkbox id={id} checked={checked} />
      <label
        htmlFor={id}
        className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export const SplitCheckbox = () => {
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
    const initialState = fourDayChecks.reduce((acc, check) => {
      if (acc[check.id] === undefined) {
        acc[check.id] = false;
      }
      return acc;
    }, checkedState);

    setCheckedState(initialState);
  }, []);

  return (
    <div className="space-y-2">
      {fourDayChecks.map((check) => (
        <Check
          onClick={handleCheck}
          key={check.id}
          checked={!!checkedState[check.id]}
          {...check}
        />
      ))}
    </div>
  );
};
