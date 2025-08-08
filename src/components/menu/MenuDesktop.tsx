import type { ScrollProps } from "../sections/Landing";

export default function MenuDesktop(props: ScrollProps) {
    return (
        <div className="hidden md:flex flex justify-center xl:justify-end gap-10 xl:gap-20 pt-20 xl:pr-40 text-2xl xl:text-4xl font-[200]">
            <div className="hover:cursor-pointer hover:text-white" onClick={props.onScrollTo.number}>By the Number</div>
            <div className="hover:cursor-pointer hover:text-white" onClick={props.onScrollTo.about}>About</div>
            <div className="hover:cursor-pointer hover:text-white" onClick={props.onScrollTo.ventures}>Ventures</div>
            <div className="hover:cursor-pointer hover:text-white" onClick={props.onScrollTo.contact}>Get In Touch</div>
        </div>
    )
}