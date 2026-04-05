import { PPLCrumbs } from "@/data/crumbs";
import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import { updateDate } from "@/data/globals";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SplitCheckbox } from "@/components/SplitCheckbox";
import { RestDayCounter } from "@/components/RestDayCounter";
import { pplChecks } from "@/data/checks";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";

export default function PushPullLegs() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <div>
          <H1>Push/Pull/Legs</H1>
          <p className="text-sm text-muted-foreground pb-8">{updateDate}</p>
          <H2 className="mt-4">Current Day</H2>
          <SplitCheckbox splitChecks={pplChecks} />
          <RestDayCounter />
          <BreadCrumb crumbs={PPLCrumbs} />
        </div>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
