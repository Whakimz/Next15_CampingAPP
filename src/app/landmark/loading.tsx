import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="space-y-4 mt-8 ">
      {/* Breadcrumb */}
      <Skeleton className="h-4 w-1/4 rounded-md bg-gray-200 dark:bg-[#1a1a1a]" />

      {/* Title */}
      <Skeleton className="h-8 w-2/3 rounded-md bg-gray-200 dark:bg-[#1a1a1a]" />

      {/* Image */}
      <Skeleton className="h-[300px] md:h-[550px] w-full rounded-md mt-4 bg-gray-200 dark:bg-[#1a1a1a]" />

      {/* Description */}
      <Skeleton className="h-4 w-full rounded-md mt-2 bg-gray-200 dark:bg-[#1a1a1a]" />
      <Skeleton className="h-4 w-5/6 rounded-md mt-2 bg-gray-200 dark:bg-[#1a1a1a]" />
      <Skeleton className="h-4 w-3/4 rounded-md mt-2 bg-gray-200 dark:bg-[#1a1a1a]" />
    </div>
  );
};

export default Loading;
