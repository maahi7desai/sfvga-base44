import { Skeleton } from "@/components/ui/skeleton";

export default function PageLoader() {
  return (
    <div className="pt-20 mx-auto max-w-[700px] px-5 sm:px-8 space-y-4">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-9 w-2/3" />
      <Skeleton className="h-56 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>);
}