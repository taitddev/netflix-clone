import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieCardSkeleton = () => {
  return (
    <div className="flex flex-col rounded-xl bg-slate-800 p-3 h-full select-none">
      <Skeleton className="w-full h-[250px] object-cover rounded-xl mb-4" />

      <div className="flex flex-col flex-1">
        <Skeleton className="font-bold mb-2" />

        <div className="flex justify-between items-center text-xs text-gray-300 mb-6">
          <Skeleton className="w-[50px]" />
          <div className="flex gap-2 items-center">
            <Skeleton className="w-[20px]" />
            <Skeleton className="w-[10px]" />
          </div>
        </div>

        <Skeleton className="px-10 py-4 rounded-xl font-bold" />
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
