"use client";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function ContainerScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden pb-32">
            <ContainerScroll
                titleComponent={
                    <>
                        <h2 className="text-4xl font-semibold text-white">
                            Unleash the power of <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                                Premium Solar Control
                            </span>
                        </h2>
                    </>
                }
            >
                <img
                    src="https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2022/12/solar-panel-installation-gold-coast-reliable-services.jpg"
                    alt="Solar Panel Dashboard Installation"
                    className="mx-auto rounded-2xl object-cover h-full w-full object-center"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}
