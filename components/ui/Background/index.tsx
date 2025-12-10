"use client"

import { ReactNode, RefObject } from 'react';
import ColorSpot from './ColorSpot';
import { BLUE_CYAN_SPOT, ORANGE_PINK_SPOT } from '@/constants/spotSvg';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface BackgroundProps {
    children: ReactNode;
    scrollContainerRef: RefObject<HTMLDivElement | null>;
}

const Background = ({ children, scrollContainerRef }: BackgroundProps) => {
    const { scrollYProgress } = useScroll({
        container: scrollContainerRef
    });

    const planetY = useTransform(scrollYProgress,
        [0, 0.13, 0.4, 0.5, 0.75, 1],
        [0, -200, -210, -360, -380, -970]
    );
    const planetRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

    const blueCyanY = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const blueCyanRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

    const orangePinkY = useTransform(scrollYProgress, [0, 1], [0, -1500]);
    const orangePinkX = useTransform(scrollYProgress, [0, 1], [0, 600]);
    const orangePinkRotate = useTransform(scrollYProgress, [0, 1], [0, 80]);

    return (
        <div className="w-full min-h-screen h-full 
        bg-[linear-gradient(180deg,#000000_36%,#191E2A_150%)] 
        flex flex-col relative overflow-hidden">
            {children}
            <motion.div
                className="z-0 absolute top-[-30%] left-[13%]"
                style={{
                    y: blueCyanY,
                    rotate: blueCyanRotate
                }}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
            >
                <ColorSpot
                    svgContent={BLUE_CYAN_SPOT.content}
                    width={BLUE_CYAN_SPOT.width}
                    height={BLUE_CYAN_SPOT.height}
                    viewBox={BLUE_CYAN_SPOT.viewBox}
                />
            </motion.div>
            <motion.div
                className='absolute bottom-[-40%] left-[-10%]'
                style={{
                    y: orangePinkY,
                    x: orangePinkX,
                    rotate: orangePinkRotate
                }}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            >
                <ColorSpot
                    svgContent={ORANGE_PINK_SPOT.content}
                    width={ORANGE_PINK_SPOT.width}
                    height={ORANGE_PINK_SPOT.height}
                    viewBox={ORANGE_PINK_SPOT.viewBox}
                />
            </motion.div>
            <motion.div
                className='top-36 right-5 absolute mix-blend-screen opacity-100'
                style={{
                    y: planetY,
                    rotate: planetRotate
                }}
            >
                <Image src={'/images/planet.png'} alt={''} width={900} height={900} />
            </motion.div>
        </div>
    );
};

export default Background;