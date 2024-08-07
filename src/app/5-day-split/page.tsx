import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import { updateDate } from "@/data/globals";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FiveDaySplitCrumbs } from "@/data/crumbs";

export default function PushPullLegs() {
  return (
    <MainWrapper>
      <MaxWidthWrapper>
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-2">
            5 Day Split
          </h1>
          <p className="text-sm text-muted-foreground pb-8">{updateDate}</p>
          <BreadCrumb crumbs={FiveDaySplitCrumbs} />
        </div>
      </MaxWidthWrapper>
    </MainWrapper>
  );
}
