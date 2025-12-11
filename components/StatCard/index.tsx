import React from "react";

interface StatCardProps {
    value: string | number;
    label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
    return (
        <div
            className="
                rounded-full
                px-6 py-3
                sm:px-6 sm:py-2
                lg:px-8 md:py-2
                xl:px-10 xl:py-2
                2xl:px-12 lg:py-6
                flex flex-col items-center
                text-white
                bg-[linear-gradient(110deg,#9C348820_0%,#FC6F3220_50%,#FF4A5920_100%)]
            "
        >
            <p className="text-xl lg:text-4xl xl:text-3xl 2xl:text-[64px] font-semibold leading-none py-2 sm:py-3 md:py-3 lg:py-4">
                {value}
            </p>

            <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-[24px] opacity-90 py-1 sm:py-1.5 md:py-1.5 lg:py-2">
                {label}
            </p>
        </div>
    );
}
export default StatCard;