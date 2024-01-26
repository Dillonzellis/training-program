import { PPLCrumbs } from "@/data/crumbs";
import { BreadCrumb } from "@/components/BreadCrumb";
import { MainWrapper } from "@/components/MainWrapper";
import { updateDate } from "@/data/globals";

export default function PushPullLegs() {
  return (
    <MainWrapper>
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-2">
          Push/Pull/Legs
        </h1>

        <p className="text-sm text-muted-foreground pb-8">{updateDate}</p>

        <BreadCrumb crumbs={PPLCrumbs} />
      </div>
    </MainWrapper>
  );
}
