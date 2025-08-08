export default function GetInTouch() {
    return (
        <section className="flex flex-col justify-center text-white mb-20 gap-4">
            <p className="flex justify-center text-[42px] font-light tracking-widest">Get In Touch</p>
            <div className="flex justify-center gap-5">
                <a href="https://www.instagram.com/hay.ecom/">
                    <img src="ic_insta.png" alt="footer" className="hover:cursor-pointer" width={60} />
                </a>
                <a href="https://x.com/hay_ecom">
                    <img src="ic_x.png" alt="footer" className="hover:cursor-pointer" width={50} />
                </a>
                <a href="https://www.tiktok.com/@hay.ecom?_t=ZT-8yhfUIoGRpH&_r=1">
                    <img src="ic_tiktok.png" alt="footer" className="hover:cursor-pointer" width={50} />
                </a>
            </div>
        </section>
    )
}