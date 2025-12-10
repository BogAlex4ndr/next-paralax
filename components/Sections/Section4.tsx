"use client"

import { motion } from 'framer-motion';
import CustomText from '../ui/CustomText';
import Button from '../ui/Button';
import Table from '../Table';
import { useAnimation } from '../../hooks/useAnimation';

const Section4 = () => {
    const { containerVariants } = useAnimation();

    return (
        <section className="h-full w-full snap-start pt-12 sm:pt-16 md:pt-20 overflow-x-hidden px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-0'>
                    <CustomText
                        as='h3'
                        className='text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-4 sm:mb-6 lg:mb-8 font-medium tracking-normal leading-[110%]'
                    >
                        LLM Leaderboard
                    </CustomText>
                    <Button
                        size="lg"
                        className='px-13! self-start lg:self-auto'
                        variant="outline"
                    >
                        Submit your model
                    </Button>
                </div>

                <p className='text-base sm:text-lg md:text-xl lg:text-2xl mt-2 leading-6 sm:leading-7 md:leading-8 lg:leading-9'>
                    We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number of different evaluation tasks.
                    <br className='hidden sm:block' />
                    The higher the score, the better the LLM.
                </p>
                <Table />
            </motion.section>
        </section>
    )
}

export default Section4