import { PPLCrumbs } from "@/data/crumbs";
import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import { updateDate } from "@/data/globals";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SplitCheckbox } from "@/components/SplitCheckbox";
import { RestDayCounter } from "@/components/RestDayCounter";
import { pplChecks } from "@/data/checks";

export default function PushPullLegs() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-2">
            Push/Pull/Legs
          </h1>

          <p className="text-sm text-muted-foreground pb-8">{updateDate}</p>

          <BreadCrumb crumbs={PPLCrumbs} />

          <h2 className="text-2xl font-bold pb-4">Current Day</h2>

          <div className="flex items-end gap-4 md:gap-8">
            <SplitCheckbox splitChecks={pplChecks} />
            <RestDayCounter />
          </div>
        </div>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
