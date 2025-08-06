export default function ByTheNumber() {
    return (
        <section className="flex flex-col justify-center gap-16 mt-24 mb-36 text-white">
            <header className="flex flex justify-center font-bold text-[32px] md:text-[42px]">By The Numbers</header>
            <section className="flex flex-col xl:flex-row justify-center gap-10 md:gap-20">
                <div className="flex flex-col justify-center md:flex-row gap-10 md:gap-20">
                    <div className="flex flex-col justify-center items-center md:gap-4">
                        <p className="flex justify-center text-[40px] ">10+</p>
                        <p className="flex justify-center text-[19px]">Years in ecommerce</p>
                    </div>
                    <div className="flex flex-col justify-center items-center md:gap-4">
                        <p className="flex justify-center text-[40px]">129M+</p>
                        <p className="flex justify-center text-[19px]">Views generated</p>
                    </div>
                </div>
                
                <div className="flex flex-col justify-center md:flex-row gap-10 md:gap-20">
                    <div className="flex flex-col justify-center items-center md:gap-4">
                        <p className="flex justify-center text-[40px]">$20M+</p>
                        <p className="flex justify-center text-[19px]">In online sales</p>
                    </div>
                    <div className="flex flex-col justify-center items-center md:gap-4">
                        <p className="flex justify-center text-[40px]">91</p>
                        <p className="flex justify-center text-[19px]">Brands consulted</p>
                    </div>
                    <div className="flex flex-col justify-center items-center md:gap-4">
                        <p className="flex justify-center text-[40px]">1.3M</p>
                        <p className="flex justify-center text-[19px]">Brand followers (DTC)</p>
                    </div>
                </div>
            </section>
        </section>
    )
}