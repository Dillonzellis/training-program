"use client";

import { Checkbox } from "@/components/ui/checkbox";

import { FourDayCheckType, fourDayChecks } from "@/data/4DayChecks";

const Check = ({ id, label }: FourDayCheckType) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
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
  return (
    <div className="space-y-2">
      {fourDayChecks.map((check) => (
        <Check key={check.id} {...check} />
      ))}
    </div>
  );
};
