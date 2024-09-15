"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const getEasternTime = () => {
  const currentUtcDate = new Date();

  const isDaylightSavingTime = () => {
    const today = new Date();
    const january = new Date(today.getFullYear(), 0, 1);
    const june = new Date(today.getFullYear(), 6, 1);
    const stdTimezoneOffset = Math.max(
      january.getTimezoneOffset(),
      june.getTimezoneOffset(),
    );

    return today.getTimezoneOffset() < stdTimezoneOffset;
  };

  const offset = isDaylightSavingTime() ? -4 : -5;
  const easternTime = new Date(
    currentUtcDate.getTime() + offset * 60 * 60 * 1000,
  );

  return easternTime;
};

export const RestDayCounter = () => {
  const [isClient, setIsClient] = useState(false);
  const [dayCounter, setDayCounter] = useLocalStorage("rest day", 0);
  const [lastUpdated, setLastUpdated] = useLocalStorage(
    "last-updated",
    getEasternTime(),
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const currentDate = getEasternTime();
    const lastUpdateDate = new Date(lastUpdated);

    const differenceInDays = Math.floor(
      (currentDate.getTime() - lastUpdateDate.getTime()) /
        (1000 * 60 * 60 * 24),
    );

    if (differenceInDays > 0) {
      setDayCounter(dayCounter + differenceInDays);
      setLastUpdated(currentDate);
    }
  }, [dayCounter, lastUpdated, setDayCounter, setLastUpdated]);

  const handleDayCounter = () => {
    const newDate = getEasternTime();
    setDayCounter((prevState) => prevState + 1);
    setLastUpdated(newDate);
  };

  const handleResetCounter = () => {
    setDayCounter(0);
    setLastUpdated(getEasternTime());
  };

  const dayColorClass = cn("font-bold text-lg", {
    "text-green-700": dayCounter <= 1,
    "text-white": dayCounter === 2,
    "text-red-900": dayCounter >= 3 && dayCounter < 5,
    "text-red-700 text-3xl": dayCounter >= 5,
  });

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-2 items-center">
      <Button variant="outline" size="icon" onClick={handleDayCounter}>
        <ChevronUp className="h-4 w-4" />
      </Button>
      <div className={dayColorClass}>{dayCounter}</div>
      <Button variant="outline" onClick={handleResetCounter}>
        Reset
      </Button>
    </div>
  );
};
