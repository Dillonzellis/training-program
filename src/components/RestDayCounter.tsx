"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RestDayCounter = () => {
  const [dayCounter, setDayCounter] = useLocalStorage("rest day", 0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDayCounter = () => {
    setDayCounter((prevState) => prevState + 1);
  };

  const dayColor = () => {
    if (dayCounter === 0 || dayCounter === 1) {
      return "text-green-700";
    }
    if (dayCounter === 2) {
      return "text-white";
    }
    if (dayCounter >= 3) {
      return "text-red-700";
    }

    if (dayCounter >= 5) {
      return "text-red-900  text-3xl";
    }
  };

  const dayColorClass = dayColor();

  // refactor using switch or cn()
  // determine rest days automatically
  return (
    <div className="flex gap-2 items-center">
      <Button variant="outline" size="icon" onClick={handleDayCounter}>
        <ChevronUp className="h-4 w-4" />
      </Button>
      {isClient && (
        <div className={`font-bold text-lg ${dayColorClass}`}>{dayCounter}</div>
      )}
      <Button onClick={() => setDayCounter(0)}>Reset</Button>
    </div>
  );
};
