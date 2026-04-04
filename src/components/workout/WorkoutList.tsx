import { Exercise } from "@/data/sets";
import { Checkbox } from "../ui/checkbox";

type WorkoutListProps = {
  exerciseList: Exercise[];
};

export default function WorkoutList({ exerciseList }: WorkoutListProps) {
  const numCheckboxes = (n: number) => {
    const checkboxes = [];
    for (let i = 0; i < n; i++) {
      checkboxes.push(<Checkbox key={i} />);
    }
    return checkboxes;
  };

  return (
    <ul className="my-6 list-disc">
      {exerciseList.map((item) => (
        <li
          key={item.name}
          className="grid items-center grid-cols-2 py-2 max-w-md border-b content-between"
        >
          <div>{item.name}</div>
          <div className="justify-self-end space-x-2">
            {numCheckboxes(item.sets)}
          </div>
        </li>
      ))}
    </ul>
  );
}
