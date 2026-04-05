"use client";

import { Exercise } from "@/data/sets";
import { Checkbox } from "../ui/checkbox";
import { useLocalStorage } from "usehooks-ts";

type WorkoutListProps = {
  exerciseList: Exercise[];
  storageKey: string;
  onClear: () => void;
};

export default function WorkoutList({
  exerciseList,
  storageKey,
  onClear,
}: WorkoutListProps) {
  const [checkedState, setCheckedState] = useLocalStorage<
    Record<string, boolean>
  >(storageKey, {});

  const handleCheck = (key: string) => {
    setCheckedState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderCheckboxes = (name: string, sets: number) => {
    const checkboxes = [];
    for (let i = 0; i < sets; i++) {
      const key = `${name}-${i}`;
      checkboxes.push(
        <button
          key={i}
          type="button"
          onClick={() => handleCheck(key)}
          className="w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-[hsl(180,30%,28%)] border-t-[hsl(182,38%,72%)] border-l-[hsl(182,38%,72%)] border-r-[hsl(180,30%,28%)] border-b-[hsl(180,30%,28%)] bg-secondary hover:bg-muted active:bg-secondary"
          aria-label={`Set ${i + 1}`}
        >
          <Checkbox
            checked={!!checkedState[key]}
            className="pointer-events-none"
          />
        </button>,
      );
    }
    return checkboxes;
  };

  return (
    <div className="w-full">
      <ul className="my-4 list-none">
        {exerciseList.map((item) => (
          <li
            key={item.name}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 w-full border-b border-border gap-2"
          >
            <div className="text-base font-medium">
              {item.name}
            </div>
            <div className="flex flex-wrap gap-2">
              {renderCheckboxes(item.name, item.sets)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
