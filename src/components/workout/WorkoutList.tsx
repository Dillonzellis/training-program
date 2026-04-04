"use client";

import { Exercise } from "@/data/sets";
import { Checkbox } from "../ui/checkbox";
import { useLocalStorage } from "usehooks-ts";

type WorkoutListProps = {
  exerciseList: Exercise[];
  storageKey: string;
  onClear: () => void;
};

export default function WorkoutList({ exerciseList, storageKey, onClear }: WorkoutListProps) {
  const [checkedState, setCheckedState] = useLocalStorage<Record<string, boolean>>(
    storageKey,
    {}
  );

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
          className="w-14 h-14 sm:w-10 sm:h-10 flex items-center justify-center rounded-md border-2 border-input bg-background hover:bg-accent transition-colors"
          aria-label={`Set ${i + 1}`}
        >
          <Checkbox 
            checked={!!checkedState[key]} 
            className="w-7 h-7 sm:w-5 sm:h-5 pointer-events-none"
          />
        </button>
      );
    }
    return checkboxes;
  };

  return (
    <div className="w-full">
      <ul className="my-6 list-disc">
        {exerciseList.map((item) => (
          <li
            key={item.name}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:py-2 w-full border-b gap-2"
          >
            <div className="text-base sm:text-base font-medium">{item.name}</div>
            <div className="flex flex-wrap gap-2 sm:gap-1">
              {renderCheckboxes(item.name, item.sets)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
