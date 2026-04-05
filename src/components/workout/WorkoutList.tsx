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
          className="w-12 h-12 flex items-center justify-center border border-[hsl(120,100%,20%)] hover:border-[hsl(120,100%,40%)] hover:shadow-glow-sm transition-all"
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
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 w-full border-b border-[hsl(120,100%,12%)] gap-2"
          >
            <div className="text-base font-terminal text-[hsl(120,100%,45%)]">
              {">"} {item.name}
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
