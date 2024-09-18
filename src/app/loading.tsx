// import { SkeletonCard } from "@/components/skeleton-card";

export default function Loading() {
    return (
        // <div className="grid sm:grid-cols-2 mt-5 md:grid-cols-3 place-items-center lg:grid-cols-4 space-y-4 px-5 space-x-2 ">
        //     {Array.from({ length: 10 }).map((_, index) => {
        //         return (
        //             <SkeletonCard />
        //         )
        //     })}
        //     <SkeletonCard />
        // </div>

        <div className="flex items-center justify-center mt-6">
            <h1 className="font-bold text-4xl text-center">Loading...</h1>
        </div>
    )
}