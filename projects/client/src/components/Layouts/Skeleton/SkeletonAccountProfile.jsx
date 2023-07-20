import { SkeletonCirle, SkeletonHorizontal } from "../../Elements/Skeleton";
import {
  SkeletonSideProfile,
  SkeletonSpace,
} from "../../Fragments/Skeleton/SkeletonProfile";

export const SkeletonAccountProfile = () => {
  return (
    <div className="grid md:grid-cols-[20%_auto] gap-8 md:h-[80vh] h-[86vh]">
      <SkeletonSideProfile />
      <div>
        <div className="md:flex items-center gap-4 mb-8 px-2">
          <div className="md:block flex justify-center">
            <SkeletonCirle width={"w-32"} height={"h-32"} />
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start mt-4 md:mt-0">
            <SkeletonHorizontal height="h-6" width="w-20" />
            <SkeletonHorizontal height="h-6" width="w-36" />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-8">
          <SkeletonSpace />
          <SkeletonSpace />
          <SkeletonSpace />
        </div>

        <div className="flex flex-col gap-2">
          <SkeletonHorizontal height="h-12" />
          <SkeletonHorizontal height="h-6" />
          <SkeletonHorizontal height="h-12" />
          <SkeletonHorizontal height="h-6" />
        </div>
      </div>
    </div>
  );
};
