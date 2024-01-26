import { chest, triceps, shoulders } from "@/data/sets";
import { PPLCrumbs } from "@/data/crumbs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BreadCrumb } from "@/components/BreadCrumb";

export default function PushPullLegs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-2">
          Push/Pull/Legs
        </h1>

        <p className="text-sm text-muted-foreground pb-8">1/26/24</p>

        <BreadCrumb crumbs={PPLCrumbs} />

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

        <div className="flex flex-col justify-start items-start">
          <Button asChild className="p-0" variant="link">
            <Link href="/">Push/Pull/Legs</Link>
          </Button>

          <Button asChild className="p-0" variant="link">
            <Link href="/">Chest/Back/Arms/Legs</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
