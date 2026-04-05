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
        <div className="font-terminal">
          <H1>PUSH_PULL_LEGS</H1>
          <p className="text-sm text-[hsl(120,100%,30%)] pb-8">{updateDate}</p>
          
          <H2 className="mb-4">CURRENT_DAY:</H2>
          <div className="mb-4">
            <SplitCheckbox splitChecks={pplChecks} />
          </div>
          <RestDayCounter />
          <BreadCrumb crumbs={PPLCrumbs} />
        </div>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
