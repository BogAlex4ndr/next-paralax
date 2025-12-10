"use client"

import { leaderboardData } from '@/constants/mockData';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react'

const Table = () => {
    const renderChangeIcon = (change: string) => {
        const iconClasses = "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6";

        switch (change) {
            case 'up':
                return <ArrowUp className={`${iconClasses} text-green-500`} />;
            case 'down':
                return <ArrowDown className={`${iconClasses} text-red-500`} />;
            default:
                return <Minus className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-500" />;
        }
    };

    const gridColumns = "grid grid-cols-[90px_2fr_repeat(7,1fr)_1fr]";
    const cellClasses = "py-4 text-end flex items-center justify-end";

    const benchmarks = [
        { key: 'arc', label: 'ARC' },
        { key: 'hellaSwag', label: 'HellaSwag' },
        { key: 'mmlu', label: 'MMLU' },
        { key: 'truthfulQa', label: 'TruthfulQA' },
        { key: 'winogrande', label: 'Winogrande' },
        { key: 'gsm8k', label: 'GSM8K' },
    ];

    return (
        <div className="w-full mt-6 sm:mt-7 md:mt-8">
            {/* Mobile Card View */}
            <div className="block lg:hidden space-y-4">
                {leaderboardData.map((row) => (
                    <div
                        key={row.rank}
                        className="bg-[#C9D9FF15] rounded-lg p-4 space-y-3"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-gray-500">
                                    {renderChangeIcon(row.change)}
                                </span>
                                <span className="text-white font-semibold text-lg">#{row.rank}</span>
                            </div>
                            <span className="text-white text-sm font-mono">{row.usage}</span>
                        </div>

                        <div className="text-white font-medium text-base">{row.name}</div>

                        {/* Average Score  */}
                        <div className="flex justify-between items-center py-2 border-t border-gray-700">
                            <span className="text-[#8F99B0] text-sm">Average</span>
                            <span className="text-white font-semibold text-lg">{row.average}</span>
                        </div>

                        {/* Scores Grid */}
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            {benchmarks.map(({ key, label }) => (
                                <div key={key} className="flex justify-between">
                                    <span className="text-[#8F99B0]">{label}</span>
                                    <span className="text-white">{row[key as keyof typeof row]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
                <table className="w-full min-w-[1200px] text-white table-fixed">
                    {/* Header */}
                    <thead>
                        <tr className={`${gridColumns} font-inter text-base tracking-wider text-[#8F99B0]`}>
                            <th className="py-4 pl-9 text-center font-normal">#</th>
                            <th className="pl-3 py-5 text-left font-normal">Model Name</th>
                            <th className="py-5 text-end font-normal">Average</th>
                            {benchmarks.map(({ label }) => (
                                <th key={label} className="py-5 text-end font-normal">{label}</th>
                            ))}
                            <th className="py-5 pr-4 text-end font-normal">Usage</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {leaderboardData.map((row) => (
                            <tr
                                key={row.rank}
                                className={`${gridColumns} odd:bg-[#C9D9FF25]`}
                            >
                                <td className="flex items-center py-4">
                                    <span className="pl-6 text-gray-500">
                                        {renderChangeIcon(row.change)}
                                    </span>
                                    <span className="pl-6 text-white">{row.rank}</span>
                                </td>

                                <td className="pl-4 py-4 flex items-center">
                                    {row.name}
                                </td>

                                <td className="py-6 text-end flex items-center justify-end">{row.average}</td>

                                {benchmarks.map(({ key }) => (
                                    <td key={key} className={cellClasses}>
                                        {row[key as keyof typeof row]}
                                    </td>
                                ))}

                                <td className="py-4 pr-4 text-right text-white font-mono flex items-center justify-end">
                                    {row.usage}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Scroll button */}
            <div className="flex justify-end mt-5 sm:mt-6 md:mt-7">
                <button className="p-3 sm:p-4 rounded-full border border-gray-300 cursor-pointer text-white hover:bg-gray-800 transition-colors">
                    <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
            </div>
        </div>
    );
};

export default Table;