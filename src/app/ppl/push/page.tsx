import { MainWrapper } from "@/components/MainWrapper";
import { chest, triceps, shoulders } from "@/data/sets";

export default function PPLPush() {
  return (
    <MainWrapper>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Push:
      </h2>

      <h3 className="text-lg font-semibold pt-8">Chest</h3>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {chest.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold pt-8">Triceps</h3>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {triceps.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold pt-8">Shoulders</h3>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {shoulders.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </MainWrapper>
  );
}
