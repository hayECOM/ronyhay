import MenuDesktop from "../menu/MenuDesktop";
import MenuMobile from "../menu/MenuMobile";

export type ScrollToHandlers = {
  number: () => void;
  about: () => void;
  ventures: () => void;
  contact: () => void;
};

export interface ScrollProps {
  onScrollTo: ScrollToHandlers;
}

export default function Landing(props: ScrollProps) {
    return (
        <div className="landing-bg">
            <MenuDesktop onScrollTo={props.onScrollTo} />
            <MenuMobile onScrollTo={props.onScrollTo} />
            <div className="flex justify-center xl:justify-end pt-80 md:pt-120 xl:pt-50 xl:pr-48">
              <div className="flex flex-col gap-10 md:gap-20 items-center">
                <p className="brittany-font text-5xl md:text-[100px] text-white">Hi, I'm Rony</p>
                <p className="text-xl md:text-3xl xl:text-5xl text-white">Entrepreneur & Ecommerce Operator</p>
                <div
                  className="bg-white py-4 px-18 rounded-full hover:cursor-pointer hover:bg-black/60 hover:text-white"
                  onClick={props.onScrollTo.contact}
                >
                  <p className="text-3xl">Let's chat!</p>
                </div>
              </div>
            </div>
        </div>
    )
}