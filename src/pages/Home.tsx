import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlowingEffectDemo } from '../components/glowing-effect-demo';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

// 4. Services Grid (3D Hover Cards)
const HoverCard = ({ title, description, image, link }: { title: string, description: string, image: string, link: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer group"
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

            <div
                className="absolute inset-0 p-8 flex flex-col justify-end"
                style={{ transform: "translateZ(50px)" }}
            >
                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">{title}</h3>
                <p className="text-slate-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {description}
                </p>
                <Link
                    to={link}
                    className="inline-flex items-center gap-2 text-amber-500 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                >
                    Learn More <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </motion.div>
    );
};

// 5. Testimonial Carousel
const Testimonials = () => {
    const reviews = [
        { name: "Constance Wade", text: "Absolutely Fantastic. Thank you so much to Jaydon from Gold Coast Power Solutions. I live in rural Townsville and could not get anyone out this way to answer the phone to help with my questions regarding my solar. Jaydon answered the phone promptly and advised me of a solution to my hot water switch not working. I cant tell you how important it is to be able to connect with someone and be able to point in the right direction with correct and thorough knowledge. This is the service we all love thanks again." },
        { name: "Jeanette Struthers", text: "The young man that came was very courteous, punctual and went above and beyond fixing our solar box and got on the roof and inspected panels also before leaving. The price was cheaper than I expected for the service. I would recommend this company to anyone. Job well done Gold Coast solar power solutions." },
        { name: "Angela Lai", text: "Such great service! Would recommend! Arranged a quote/visit the next day after I called. Quote personal came on time, had a look at the house, and gave a very professional and detailed quote. They let us know all the different prices and available options. Installer also came on time and efficiently finished his work. Everything went smoothly. Thank you to the amazing team!" },
        { name: "Peter Murray", text: "I had my old solar system replaced on 18/2/22. The hole process was extremely easy, with great price, sales service & was the installation team that fitted it. They were very respectful of me, my house, took all the old system away, cleaned up after themselves. Generally did a good job. I would definitely recommend this company for any solar requirements. Thanks again." }
    ];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [reviews.length]);

    return (
        <div className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-amber-500/5 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <h2 className="text-amber-500 font-semibold tracking-wider uppercase text-sm mb-4">Client Success Stories</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-16">Don't just take our word for it</h3>

                <div className="relative min-h-[450px] sm:min-h-[350px] md:min-h-[250px] w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center w-full"
                        >
                            <div className="text-lg md:text-xl lg:text-2xl font-medium text-slate-300 leading-relaxed mb-6">
                                "{reviews[current].text}"
                            </div>
                            <div className="text-amber-500 font-bold text-lg">
                                — {reviews[current].name}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-3 mt-8">
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={cn("w-3 h-3 rounded-full transition-colors", current === i ? "bg-amber-500" : "bg-white/20 hover:bg-white/40")}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 300]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    // Framer Motion Variants for Staggered Text
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
    };

    const logos = [
        "https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2024/09/fronius-logo.png",
        "https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2018/12/solaredge-logo.png",
        "https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2018/10/sungrow-logo.png",
        "https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2018/10/longi-logo.png",
        "https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2018/10/sma-logo.png",
        "https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2018/10/ja-solar-logo.png",
        "https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2025/05/Sigenergy-logo-1.png"
    ];

    return (
        <div className="bg-slate-950">
            {/* 2. Hero Section (3D Parallax) */}
            <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20">
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center scale-110"
                        style={{ backgroundImage: `url(https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2022/12/solar-panel-installation-gold-coast-reliable-services.jpg)` }}
                    />
                    <div className="absolute inset-0 bg-slate-950/70" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />
                </motion.div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 w-full pt-20 pb-32">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-5xl mx-auto text-center"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-500 font-medium mb-8 backdrop-blur-md">
                            <Zap className="w-5 h-5" />
                            <span>Premium Solar & Battery Solutions</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-8">
                            Power Your Home.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Cut Your Bills.</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                            Secure your energy future with industry-leading solar arrays designed for Gold Coast homes. Don't let rising power costs dictate your lifestyle.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2">
                                Get a Free Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Trust Banner (Infinite Scroll) */}
            <section className="bg-slate-950 border-y border-white/5 py-12 overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                    <div className="inline-flex items-center justify-center gap-3 text-slate-400 font-medium text-sm tracking-widest uppercase">
                        <ShieldCheck className="w-5 h-5 text-amber-500" />
                        Trusted Clean Energy Council Approved Installers
                    </div>
                </div>

                <div className="flex w-[200%] md:w-[150%] xl:w-[100%] overflow-hidden">
                    <motion.div
                        className="flex items-center gap-16 px-8 flex-nowrap shrink-0"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                    >
                        {[...logos, ...logos, ...logos].map((logo, index) => (
                            <img key={index} src={logo} alt="Partner Logo" className="h-10 md:h-12 object-contain filter grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all cursor-pointer" />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Glowing Effect Demo Section */}
            <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-amber-500/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-white mb-6">The Gold Coast Difference</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Why thousands of local homeowners and businesses trust us to secure their energy future.
                        </p>
                    </div>
                    <GlowingEffectDemo />
                </div>
            </section>

            {/* 4. Services Grid (3D Hover Cards) */}
            <section className="py-32 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold text-white mb-6">Our Expertise</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Premium tier-1 technology combined with master craftsmanship across all our energy solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-[2000px]">
                        <HoverCard
                            title="Residential Solar"
                            description="High-yield solar systems for homes using premium panels from JA Solar and REC."
                            image="https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2024/09/Best-solar-panel-installation-in-gold-coast-300x300-1-2.webp"
                            link="/services"
                        />
                        <HoverCard
                            title="Commercial Solar"
                            description="Large scale systems designed to protect your business bottom line from rising energy costs."
                            image="https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2022/04/cspt-tab1.jpg"
                            link="/services"
                        />
                        <HoverCard
                            title="Battery Storage"
                            description="Tesla Powerwall and Sungrow hybrid systems for blackout protection and nighttime power."
                            image="https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2016/04/Tesla-Powerwall-2-Dimensions.jpg"
                            link="/services"
                        />
                        <HoverCard
                            title="Maintenance"
                            description="Keep your system running at peak performance with our health checks and cleaning services."
                            image="https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2022/12/solar-panel-installation-gold-coast-reliable-services.jpg"
                            link="/contact"
                        />
                    </div>
                </div>
            </section>

            {/* 5. Social Proof / Testimonials */}
            <Testimonials />
        </div>
    );
}
