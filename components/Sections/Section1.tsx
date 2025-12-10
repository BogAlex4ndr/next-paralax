"use client"
import { RefObject } from 'react'
import Button from '../ui/Button';
import CustomText from '../ui/CustomText';
import { motion } from 'framer-motion';
import StatCard from '../StatCard';
import { useSectionAnimations } from '@/hooks/useSectionAnimations';

const Section1 = ({ scrollContainerRef }: { scrollContainerRef: RefObject<HTMLDivElement | null> }) => {
    const {
        animatedGradient,
        animatedFontSize,
        animatedY,
        container,
        item,
    } = useSectionAnimations(scrollContainerRef);

    return (
        <section className="h-[130%] lg:h-[130%] w-full snap-start flex flex-col relative px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="flex mx-auto mt-8 justify-self-center sticky top-8 z-50 gap-6">
                <Button size="md" variant="text">How It Works</Button>
                <Button size="md" variant="outline">Buy Salt AI</Button>
            </div>
            <motion.div className="max-w-full mt-58 xl:mt-58" style={{ y: animatedY }}>
                <CustomText as="h1" className="text-lg sm:text-xl xl:text-2xl 2xl:text-9xl tracking-normal"
                    gradient={animatedGradient}
                    style={{ fontSize: animatedFontSize }}
                >
                    A new economic primitive<br /> for funding decentralized AI
                </CustomText>
                <p className="text-lg lg:text-2xl mt-9 ">
                    We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
                </p>
                <div className="mt-9 flex flex-row items-start">
                    <Button size="lg" variant="outline">Buy Salt AI</Button>
                    <Button size="lg" variant="text">Try Now</Button>
                </div>
            </motion.div>
            <div className="h-160 md:h-160 lg:h-180"></div>
            <motion.section
                className="flex flex-col xl:flex-row items-end mt-19 w-full justify-between gap-4 xl:gap-8 pb-12"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div variants={item} className="w-full">
                    <StatCard value="1,873" label="LLM models" />
                </motion.div>

                <motion.div variants={item} className="w-full">
                    <StatCard value="$326,734" label="Paid to data scientists" />
                </motion.div>

                <motion.div variants={item} className="w-full">
                    <StatCard value="6,557" label="Developers" />
                </motion.div>
            </motion.section>
        </section>
    )
}

export default Section1;

