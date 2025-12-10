import React, { JSX } from 'react';
import { motion, MotionValue, MotionStyle } from 'framer-motion';

interface CustomTextProps {
    as?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
    className?: string;
    gradient?: string | MotionValue<string>;
    style?: MotionStyle;
}

const CustomText: React.FC<CustomTextProps> = ({
    as = 'span',
    children,
    className = '',
    gradient,
    style = {}
}) => {
    const MotionTag = motion(as as any);

    return (
        <MotionTag
            className={`bg-clip-text text-transparent w-fit ${className}`}
            style={{
                backgroundImage: gradient,
                ...style
            }}
        >
            {children}
        </MotionTag>
    );
};

export default CustomText;