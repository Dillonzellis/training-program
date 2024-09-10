"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const RestDayCounter = () => {
  const [dayCounter, setDayCounter] = useLocalStorage("rest day", 0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDayCounter = () => {
    setDayCounter((prevState) => prevState + 1);
  };

  const dayColorClass = cn("font-bold text-lg", {
    "text-green-700": dayCounter <= 1,
    "text-white": dayCounter === 2,
    "text-red-900": dayCounter >= 3 && dayCounter < 5,
    "text-red-700 text-3xl": dayCounter >= 5,
  });

  // determine rest days automatically
  // if currentDay is past previousDay + 1
  return (
    <div className="flex gap-2 items-center">
      <Button variant="outline" size="icon" onClick={handleDayCounter}>
        <ChevronUp className="h-4 w-4" />
      </Button>
      {isClient && <div className={dayColorClass}>{dayCounter}</div>}
      <Button variant="outline" onClick={() => setDayCounter(0)}>
        Reset
      </Button>
    </div>
  );
};
