import { motion } from "framer-motion";

export default function Ventures() {
    return (
        <section className="flex flex-col gap-16 mt-24 mb-18 text-white">
            <header className="flex flex justify-center font-bold text-[42px]">Ventures</header>
            <section className="flex flex-col justify-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        bounce: 20,
                        stiffness: 60,
                        damping: 18,
                    }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10"
                >
                    <div className="w-[400px]">
                        <img src="lead-next-gen.png" alt="lead-next-gen" width={400} />
                    </div>
                    <div className="flex flex-col gap-3 w-5/6 xl:w-[700px]">
                        <p className="text-[26px]">Lead Next Gen</p>
                        <p className="text-[18px">Helped community leaders and entrepreneurs rapidly grow their email lists, influence, and revenue through high-impact virtual summits — generating multiple five-figure launches. Worked with brands such as Compass, The Futur, and more.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        bounce: 20,
                        stiffness: 60,
                        damping: 18,
                    }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10"
                >
                    <div className="w-[400px]">
                        <img src="kloud-consulting.png" alt="kloud-consulting" width={380} />
                    </div>
                    <div className="flex flex-col gap-3 w-5/6 xl:w-[700px]">
                        <p className="text-[26px]">Klout Consulting</p>
                        <p className="text-[18px">Built a performance marketing agency that scaled to $90K/month, managing paid social, Google Ads, and email for 75+ clients. Drove over 8 figures in client ad revenue.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        bounce: 20,
                        stiffness: 60,
                        damping: 18,
                    }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10"
                >
                    <div className="w-[400px] pl-3">
                        <img src="crew-fire.png" alt="crew-fire" width={360} />
                    </div>
                    <div className="flex flex-col gap-3 w-5/6 xl:w-[700px]">
                        <p className="text-[26px]">CrewFire</p>
                        <p className="text-[18px">Owned and scaled a creator management platform that helped 100+ brands run UGC campaigns in one tool. Grew to 16,000+ creators before being acquired by BrandCamp.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        bounce: 20,
                        stiffness: 60,
                        damping: 18,
                    }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10"
                >
                    <div className="w-[400px] pl-2">
                        <img src="lean-growth-formula.png" alt="lean-growth-formula" width={380} />
                    </div>
                    <div className="flex flex-col gap-3 w-5/6 xl:w-[700px]">
                        <p className="text-[26px]">Lean Growth Formula</p>
                        <p className="text-[18px">Helped high-ticket coaches scale through growth operations - building systems for demand generation, fulfillment, and sustainable scale. Recent clients have grown from $0 to $50K/month in 3 months, and from $5K to $100K/month in under 6 months.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        bounce: 20,
                        stiffness: 60,
                        damping: 18,
                    }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10"
                >
                    <div className="w-[400px] pl-2">
                        <img src="scale-wellness.png" alt="scale-wellness" width={380} />
                    </div>
                    <div className="flex flex-col gap-3 w-5/6 xl:w-[700px]">
                        <p className="text-[26px]">Scale Wellness</p>
                        <p className="text-[18px">Ran a mentorship program for wellness e-commerce founders to grow without agencies by mastering paid traffic, funnels, and lean teams. Since launch, helped generate $14M+ in ad revenue and guided multiple founders to $100K months with in-house systems.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        bounce: 20,
                        stiffness: 60,
                        damping: 18,
                    }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10"
                >
                    <div className="w-[400px] flex justify-center">
                        <img src="water-proof-jewelry.png" alt="water-proof-jewelry" width={160} />
                    </div>
                    <div className="flex flex-col gap-3 w-5/6 xl:w-[700px]">
                        <p className="text-[26px]">Waterproof Jewelry (Redacted)</p>
                        <p className="text-[18px">Scaled a Hawaii-based jewelry brand by applying full-stack expertise in brand, growth, and operations. Grew from low-AOV, organic-only sales to a high-performing paid growth engine - boosting AOV from $15 to $75+ and revenue to $600K/month.</p>
                    </div>
                </motion.div>
            </section>
        </section>
    )
}