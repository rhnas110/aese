import { SkeletonHorizontal } from "../../Elements/Skeleton";

export const SkeletonSideProfile = () => {
  return (
    <div className="flex-col gap-2 hidden md:flex h-fit">
      <SkeletonHorizontal height={"h-12"} />
      <SkeletonHorizontal />
      <SkeletonHorizontal />
      <SkeletonHorizontal height={"h-12"} />
    </div>
  );
};

export const SkeletonSpace = () => {
  return (
    <div className="gap-2 flex justify-between">
      <SkeletonHorizontal width="w-32 sm:w-40 md:w-48" height="h-6" />
      <SkeletonHorizontal width="w-32 sm:w-40 md:w-48" height="h-6" />
    </div>
  );
};
