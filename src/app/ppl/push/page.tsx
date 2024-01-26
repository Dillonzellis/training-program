import { MainWrapper } from "@/components/MainWrapper";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { chest, triceps, shoulders } from "@/data/sets";

export default function PPLPush() {
  return (
    <MainWrapper>
      <div>
        <H1 className="pb-8">Push</H1>

        <H2>Chest</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {chest.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <H2>Triceps</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {triceps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <H2>Shoulders</H2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {shoulders.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </MainWrapper>
  );
}
