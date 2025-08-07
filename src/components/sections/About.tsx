import { motion } from 'framer-motion'

export default function About() {
    return (
        <section className="flex flex-col-reverse xl:flex-row justify-center items-center text-white gap-12">
            <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    type: 'spring',
                    bounce: 20,
                    stiffness: 60,
                    damping: 18,
                }}
                className="w-3/4 md:w-[700px]"
            >
                <header className="flex justify-center xl:justify-start font-bold mb-6 text-[42px]">About</header>
                <section className="flex flex-col gap-4 text-[18px]">
                    <div>I've been building online businesses for over a decade, but the path wasn't linear.</div>
                    <div>I started out experimenting with everything I could — flipping products, Amazon FBA, forex, crypto, and digital marketing. Most of it didn't stick, but it laid the foundation for what came next.</div>
                    <div>One of my first real wins was CrewFire, a UGC platform I grew to 16,000+ creators and later sold. After that, I built an e-commerce growth agency, where I managed over $500K/month in ad spend.</div>
                    <div>I later launched Scale Wellness, a mentorship program helping wellness e-commerce founders scale from six figures a year to six figures a month by building in-house marketing systems instead of relying on agencies.</div>
                    <div>Today, I'm focused on scaling a waterproof jewelry brand to new heights — and turning those lessons into resources for other founders on the same path.</div>
                </section>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    type: 'spring',
                    bounce: 20,
                    stiffness: 60,
                    damping: 18,
                }}
            >
                <img src="about.jpg" alt="about" width={380} />
            </motion.div>
        </section>
    )
}