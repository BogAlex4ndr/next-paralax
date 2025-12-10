import Image from 'next/image'
import React from 'react'

interface CompanyLogoProps {
    companyName: string;
    width?: number;
    height?: number;
}

const CompanyCard: React.FC<CompanyLogoProps> = ({
    companyName,
    width = 300,
    height = 102
}) => {
    const imagePath = `/images/${companyName.toLowerCase()}.png`;

    return (
        <div
            className='object-cover'
        >
            <Image
                src={imagePath}
                alt={`${companyName} logo`}
                width={width}
                height={height}
                className='w-full h-full'
            />
        </div>
    )
}

export default CompanyCard;