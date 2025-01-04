import { Skeleton } from "../ui/skeleton";

const LoadingCard = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
      {/* เรียกใช้ SkeletonHero */}
      <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4">
        <SkeletonHero />
      </div>

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

// ฟังก์ชัน SkeletonHero
export const SkeletonHero = () => {
  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-lg">
        {/* Main hero image skeleton */}
        <Skeleton className="w-full h-[32rem] bg-gray-200 dark:bg-[#1a1a1a]" />

        {/* Overlay content */}
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="flex flex-col space-y-2">
            {/* Title skeleton */}
            <Skeleton className="h-8 w-64 bg-gray-300 dark:bg-[#1f1f1f] rounded-lg" />
            {/* Subtitle skeleton */}
            <Skeleton className="h-4 w-48 bg-gray-300 dark:bg-[#1f1f1f] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
