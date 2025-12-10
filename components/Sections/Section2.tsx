"use client"

import CustomText from '../ui/CustomText'
import CompanyCard from '../CompanyCard'
import { motion } from 'framer-motion';
import { useAnimation } from '../../hooks/useAnimation';

const Section2 = () => {
    const {
        containerVariants,
        slideInVariants,
        slideInVariantsLg,
        isLargeScreen
    } = useAnimation();

    const integratedCompanies = [
        'telegram',
        'solana',
        'arweave',
        'bittensor',
        'ionic',
        'telegram',
    ];

    return (
        <section className="h-full w-full snap-start pt-[60%] sm:pt-16 md:pt-[15%] lg:pt-[20.3%] overflow-x-hidden">
            <motion.section
                className='flex flex-col items-center relative px-4 sm:px-6 md:px-8 lg:px-0'
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <CustomText
                    as='h2'
                    className='text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] mb-6 sm:mb-8 md:mb-10 tracking-normal font-medium leading-normal text-center'
                >
                    Projects integrated into the Arrakis AI Ecosystem
                </CustomText>
                <motion.div
                    variants={isLargeScreen ? slideInVariantsLg : slideInVariants}
                    className="flex flex-row items-center justify-start lg:justify-between w-screen overflow-x-auto lg:overflow-hidden gap-4 sm:gap-6 md:gap-8 lg:gap-0 px-4 sm:px-6 md:px-8 lg:px-0 pb-4 lg:pb-0 scrollbar-hide"
                >
                    {integratedCompanies.map((companyName, index) => (
                        <CompanyCard
                            key={`${companyName}-${index}`}
                            companyName={companyName}
                        />
                    ))}
                </motion.div>
            </motion.section>
        </section>
    )
}

export default Section2