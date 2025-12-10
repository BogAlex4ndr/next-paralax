
type ModelData = {
    rank: number;
    change: 'up' | 'down' | 'same';
    name: string;
    average: number;
    arc: number;
    hellaSwag: number;
    mmlu: number;
    truthfulQa: number;
    winogrande: number;
    gsm8k: number;
    usage: string;
}

export const leaderboardData: ModelData[] = [
    {
        rank: 1,
        change: 'same',
        name: 'davidkim205/Rhea-72b-v0.5',
        average: 81.22,
        arc: 79.78,
        hellaSwag: 91.15,
        mmlu: 77.95,
        truthfulQa: 74.50,
        winogrande: 87.85,
        gsm8k: 76.12,
        usage: '1,384,193'
    },
    {
        rank: 2,
        change: 'up',
        name: 'MTSAIR/MultiVerse_70B',
        average: 81.00,
        arc: 78.67,
        hellaSwag: 89.77,
        mmlu: 78.22,
        truthfulQa: 75.18,
        winogrande: 87.53,
        gsm8k: 76.65,
        usage: '1,319,156'
    },
    {
        rank: 3,
        change: 'same',
        name: 'SF-Foundation/Ein-72B-v0.11',
        average: 80.81,
        arc: 76.79,
        hellaSwag: 89.02,
        mmlu: 77.20,
        truthfulQa: 79.02,
        winogrande: 84.06,
        gsm8k: 78.77,
        usage: '1,298,529'
    },
    {
        rank: 4,
        change: 'up',
        name: 'abacusai/Smaug-72B-v0.1',
        average: 80.48,
        arc: 76.02,
        hellaSwag: 89.27,
        mmlu: 77.15,
        truthfulQa: 76.67,
        winogrande: 85.08,
        gsm8k: 78.70,
        usage: '1,255,720'
    },
    {
        rank: 5,
        change: 'down',
        name: 'ibivibiv/alpaca-dragon-72b-v1',
        average: 79.30,
        arc: 73.89,
        hellaSwag: 88.16,
        mmlu: 77.40,
        truthfulQa: 72.69,
        winogrande: 86.03,
        gsm8k: 77.63,
        usage: '1,239,060'
    },
    {
        rank: 6,
        change: 'same',
        name: 'mistralai/Mixtral-8x22B-Instruct-v0.1',
        average: 79.15,
        arc: 72.70,
        hellaSwag: 89.08,
        mmlu: 77.77,
        truthfulQa: 68.14,
        winogrande: 85.16,
        gsm8k: 82.03,
        usage: '1,208,462'
    },
    {
        rank: 7,
        change: 'up',
        name: 'mistralai/Mixtral-8x22B-Instruct-v0.1',
        average: 79.15,
        arc: 72.70,
        hellaSwag: 89.08,
        mmlu: 77.77,
        truthfulQa: 68.14,
        winogrande: 85.16,
        gsm8k: 82.03,
        usage: '1,208,462'
    },
    {
        rank: 8,
        change: 'same',
        name: 'mistralai/Mixtral-8x22B-Instruct-v0.1',
        average: 79.15,
        arc: 72.70,
        hellaSwag: 89.08,
        mmlu: 77.77,
        truthfulQa: 68.14,
        winogrande: 85.16,
        gsm8k: 82.03,
        usage: '1,208,462'
    }
];
