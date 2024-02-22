export const fourDayChecks = [
  {
    id: "chest",
    label: "Chest",
  },
  {
    id: "back",
    label: "Back",
  },
  {
    id: "arms",
    label: "Arms",
  },
  {
    id: "legs",
    label: "Legs",
  },
] as const;

export type FourDayCheckType = (typeof fourDayChecks)[number];
