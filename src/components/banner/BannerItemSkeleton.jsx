import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BannerItemSkeleton = () => {
  return (
    <>
      <div className="w-full h-full rounded-3xl relative">
        <Skeleton className="w-full h-full object-cover rounded-lg" />

        <div className="absolute bottom-5 left-5">
          <div className="flex flex-col gap-8">
            <Skeleton className="text-4xl font-bold w-[700px]" />

            <div className="flex gap-3">
              <Skeleton className="w-20" />
              <Skeleton className="w-20" />
              <Skeleton className="w-20" />
            </div>

            <div className="flex gap-4">
              <Skeleton className="px-10 py-4 rounded-xl font-bold" />
              <Skeleton className="rounded-xl py-4 w-12" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerItemSkeleton;
