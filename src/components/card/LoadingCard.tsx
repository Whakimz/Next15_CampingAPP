import { Skeleton } from "../ui/skeleton";

const LoadingCard = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export const SkeletonCard = () => {
  return (
    <>
      <div className="space-y-3">
        {/* Image Skeleton */}
        <div className="relative h-[300px] rounded-md">
          <Skeleton className="h-full w-full rounded-md bg-gray-200 dark:bg-[#1a1a1a]" />
        </div>
        {/* Title and Info Skeleton */}
        <div className="flex items-center justify-between px-3">
          <Skeleton className="h-4 w-1/3 mt-1 bg-gray-200 dark:bg-[#1a1a1a]" />
          <Skeleton className="h-4 w-1/3 bg-gray-200 dark:bg-[#1a1a1a]" />
        </div>
        {/* Text Skeleton */}
        <div className="space-y-2 px-3">
          <Skeleton className="h-4 w-full bg-gray-200 dark:bg-[#1a1a1a]" />
          <Skeleton className="h-4 w-5/6 bg-gray-200 dark:bg-[#1a1a1a]" />
        </div>
        {/* Footer Skeleton */}
        <div className="flex items-center justify-between px-3 pb-3">
          <Skeleton className="h-4 w-1/4 bg-gray-200 dark:bg-[#1a1a1a]" />
          <Skeleton className="h-4 w-1/3 bg-gray-200 dark:bg-[#1a1a1a]" />
        </div>
      </div>
    </>
  );
};
export default LoadingCard;
