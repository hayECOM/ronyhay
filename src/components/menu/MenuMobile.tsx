import { motion, AnimatePresence } from "framer-motion";
import { Fragment, useState } from "react";
import { MdMenu } from "react-icons/md";
import type { ScrollProps } from "../sections/Landing";

export default function MenuMobile(props: ScrollProps) {
    const [open, setOpen] = useState<boolean>(false)

    const onNumberClick = () => {
        setOpen(false)
        props.onScrollTo.number()
    }
    const onAboutClick = () => {
        setOpen(false)
        props.onScrollTo.about()
    }
    const onVenturesClick = () => {
        setOpen(false)
        props.onScrollTo.ventures()
    }
    const onContactClick = () => {
        setOpen(false)
        props.onScrollTo.contact()
    }
    return (
        <Fragment>
            <div className="md:hidden flex justify-end pt-10 pr-10 text-[60px]">
                <MdMenu onClick={() => setOpen(!open)} />
            </div>

            <AnimatePresence mode="wait">
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        className="absolute top-20 left-0 w-full h-full z-20"
                    >
                        <div className="bg-[#1B1816] text-xl text-white py-10 m-6 rounded-3xl">
                            <div className="flex flex-col gap-10 justify-center items-center">
                                <div className="hover:cursor-pointer" onClick={onNumberClick}>By the Number</div>
                                <div className="hover:cursor-pointer" onClick={onAboutClick}>About</div>
                                <div className="hover:cursor-pointer" onClick={onVenturesClick}>Ventures</div>
                                <div className="hover:cursor-pointer" onClick={onContactClick}>Get In Touch</div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Fragment>

    )
}