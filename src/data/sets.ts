export const shWarmUp1 = [
  "Shoulder Turn Up 2x10-12",
  "Rotator Cuff 2x10-12",
] as const;
export const shWarmUp2 = [
  "Shoulder Turn Up 2x10-12",
  "Full ROM Sh Turn Up 2x10-12",
] as const;

export const legsWarmUp = ["Sleds 3x"] as const;

export const wSplMondayChest = [
  "Incline Smith Press 3x 8-12",
  "Machine Chest Press 3x 12-15",
] as const;

export const wSplMondayBack = [
  "Assisted Pull Up 3x 8-12",
  "Machine Seated Row 3x 12-15",
] as const;

export const wSplMondayShoulders = [
  "Full rom laterals 3x 10-20 myo match",
  "Cable y raise 3x 10-20 myo match",
] as const;

export const wSplTuesdayLegs = [
  "Lying hamstring curl 3X10-20 myo match",
  "Leg extensions 3X10-20 myo match",
  "Leg press 3X12-15",
  "Standing Calf Raise 3x 10-15 myo match",
  "Hack squat 2X8-12",
] as const;

export const wSplTuesdayArms = [
  "Spider Curls 3X10-20 myo match",
  "Behind Back Cable Curls 3x 12-15",
  "Skull Crushers 3X10-20 myo match",
] as const;

export const wSplWednesdayChest = [
  "Flat smith press 3x 10-12",
  "Dips 3x 10-12",
] as const;

export const wSplWednesdayBack = [
  "D Handle Row 3x 12-15",
  "Lat Pulldown 3X10-20 myo match",
] as const;

export const wSplWednesdayShoulders = [
  "Machine Laterals Trap Focus 3x 10-12 myo",
  "Upright Row 2x 10-12",
  "Face pulls 3- 4X 15-20",
  "Cutler Rear Delt 2x 10-12",
] as const;

export const wSplThursdayLegs = [
  "Seated hamstring curl 3X10-20 myo match",
  "Leg press 3X8-10",
  "Seated calf raise 3X10-15",
  "Smith squat 2X8-12",
] as const;

export const wSplThursdayArms = [
  "DB Alt Curl 3X10-20 myo match",
  "EZ bar curl 3X10-20 myo match",
  "Incline curl 3X12-15",
  "Tricep pushdown 3X10-20 myo match",
] as const;

export const wSplFridayChest = [
  "Pec Deck 3x12-15",
  "Machine Chest Press 3x12-15",
] as const;

export const wSplFridayBack = [
  "Close Grip Pulldown 3x10-12",
  "High Row Machine 2x 10-15",
  "Cable Pull Over 3x10-12",
] as const;

export const wSplFridayShoulders = [
  "Cable Laterals 3x12-15",
  "Machine Laterals 3x12-15",
] as const;

export const chest = [
  "Incline Bench Press",
  "Flat Bench Press",
  "Cable Crossovers/Flys",
] as const;

export const triceps = ["Cable Pushdown", "Skull Crushers", "Dips"] as const;

export const shoulders = [
  "Shoulder Press",
  "Cable Lateral Raise",
  "Cable Face Pull",
  "Underhand Band Top Down",
] as const;

export const back = [
  "Lat Pulldown",
  "Mid Row",
  "High Row",
  "Low Row",
  "Pull Over",
  "Single Arm Pull Over",
] as const;

export const biceps = [
  "Alternating Bicep Curls",
  "Bar Curl",
  "Single Arm Behind Back Cable Curl",
  "Front Cable Curl",
] as const;

export const legs = [
  "Hamstring Curl",
  "Leg Extension",
  "Leg Press",
  "Standing Calf Raise",
  "Seated Calf Raise",
  "Hip Abductor",
  "Hip Adductor",
] as const;

export type Exercise = {
  name: string;
  sets: number;
};

// 4 Day Split V2
export const tricepsA: Exercise[] = [
  { name: "Cable Pushdowns", sets: 3 },
  { name: "Skull Crushers", sets: 3 },
  { name: "Kick Backs", sets: 3 },
  { name: "Across Chest Side extends", sets: 2 },
];

export const tricepsB: Exercise[] = [
  { name: "Skull Crushers", sets: 3 },
  { name: "Cable Pushdowns", sets: 3 },
];

export const bicepsA: Exercise[] = [
  { name: "Alt Bicep Curl", sets: 3 },
  { name: "Bar Curls", sets: 3 },
];

export const bicepsB: Exercise[] = [
  { name: "Alt Db Curls", sets: 3 },
  { name: "Bar Curl", sets: 3 },
  { name: "Bayesian Curl", sets: 3 },
  { name: "Front Cable Curl (w/Bar)", sets: 3 },
  { name: "Wrist curls", sets: 3 },
  { name: "Reverse Wrist curls", sets: 3 },
];

export const backA: Exercise[] = [
  { name: "Lat Pulldown Close Grip", sets: 3 },
  { name: "Cable Low Rows", sets: 3 },
  { name: "Machine Seated High Row", sets: 3 },
  { name: "Pull down machine", sets: 3 },
  { name: "Cable Pull Over", sets: 3 },
  { name: "Machine Back Ext", sets: 3 },
  { name: "Shrugs", sets: 3 },
];

export const backB: Exercise[] = [
  { name: "Lat Pull Down", sets: 3 },
  { name: "Cable Rows", sets: 3 },
  { name: "Machine Back Ext", sets: 3 },
];

export const chestA: Exercise[] = [
  { name: "Incline DB Press", sets: 3 },
  { name: "Machine Chest Press", sets: 3 },
];

export const chestB: Exercise[] = [
  { name: "Incline Dumbbell Press", sets: 3 },
  { name: "Machine Chest Press", sets: 3 },
  { name: "Dips (chest focused)", sets: 3 },
  { name: "Cable Crossovers/Flys", sets: 2 },
];

export const shouldersA: Exercise[] = [
  { name: "BB Shoulder Press", sets: 3 },
  { name: "Machine Shoulder Press", sets: 3 },
  { name: "Cutler Rear Delt", sets: 3 },
];

export const shouldersB: Exercise[] = [
  { name: "DB Laterals", sets: 3 },
  { name: "Machine Laterals", sets: 3 },
  { name: "Reverse Flys", sets: 3 },
];

export const legsA: Exercise[] = [
  { name: "Sleds", sets: 3 },
  { name: "Leg Extension", sets: 3 },
  { name: "hamstring curls", sets: 2 },
  { name: "Standing Calf Raise", sets: 3 },
  { name: "Hip Abductor", sets: 2 },
  { name: "Hip Adductor", sets: 2 },
  { name: "Machine Squat Quad Focus", sets: 3 },
  { name: "Leg Extension", sets: 3 },
];

export const legsB: Exercise[] = [
  { name: "Sleds", sets: 3 },
  { name: "Seated Hamstring Curl", sets: 3 },
  { name: "Leg Extension", sets: 3 },
  { name: "Lying Hamstring Curl", sets: 3 },
  { name: "RDLs", sets: 3 },
  { name: "Standing Calf Raise", sets: 3 },
  { name: "Seated Calf Raise", sets: 2 },
  { name: "Machine Squat Hamstring Focus", sets: 3 },
];
