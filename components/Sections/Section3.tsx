"use client"

import { motion } from 'framer-motion';
import CustomText from '../ui/CustomText';
import Button from '../ui/Button';
import { useAnimation } from '../../hooks/useAnimation';

const Section3 = () => {
    const { containerVariants } = useAnimation();

    return (
        <section className="h-full w-full snap-start pt-32 sm:pt-16 md:pt-20 lg:pt-73 overflow-x-hidden px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <CustomText
                    as='h3'
                    className='text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-4 sm:mb-6 md:mb-8 font-medium tracking-normal leading-[110%]'
                >
                    Crowdsourcing our collective <br className="hidden sm:block" /> intelligence to build the best AI
                </CustomText>
                <div className='max-w-6xl text-base sm:text-lg md:text-xl lg:text-2xl leading-6 sm:leading-7 md:leading-8 mb-6 sm:mb-7 md:mb-8'>
                    <p className='mb-3 sm:mb-4'>
                        Open source AI has been lagging behind the likes of Google and OpenAI by
                        billions of dollars.
                    </p>
                    <p>
                        Salt aims to solve that by rewarding open source developers
                        who contribute to the democratization of AI. We run competitions
                        between AI models to find and reward the best AI models. As a result,
                        our users will be able to access the latest cutting edge AI models.
                    </p>
                </div>
                <Button size="lg" variant="outline">
                    Use The Cutting Edge AI
                </Button>
            </motion.section>
        </section>
    )
}

export default Section3