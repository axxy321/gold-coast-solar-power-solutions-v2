import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Battery, Zap, ChevronDown, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const ProductCard = ({ brand, price, description, compatibility, image }: { brand: string, price: string, description: string, compatibility: string, image: string }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-900 border border-white/5 rounded-3xl overflow-hidden group relative flex flex-col h-full"
        >
            <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors z-0"></div>
            <div className="p-8 relative z-10 flex-grow flex flex-col">
                <div className="h-16 flex items-center mb-6">
                    <img src={image} alt={brand} className="max-h-full max-w-[150px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{brand}</h3>
                <div className="text-amber-500 font-bold mb-4">{price}</div>
                <p className="text-slate-400 mb-6 flex-grow">{description}</p>
                <div className="bg-slate-950/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3 text-sm text-slate-300">
                        <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                        <span>{compatibility}</span>
                    </div>
                </div>
                <button className="w-full py-4 text-center font-bold text-slate-900 bg-white hover:bg-amber-500 rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                    Get a Quote
                </button>
            </div>
        </motion.div>
    );
};

const FAQAccordion = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="text-lg font-medium text-white group-hover:text-amber-400 transition-colors">{question}</span>
                <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform duration-300", isOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-slate-400 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function Batteries() {
    const products = [
        {
            brand: "Sigenergy",
            price: "From just $7,800 installed",
            description: "AC or DC Coupled Stackable Battery Systems for versatile energy storage.",
            compatibility: "SolarEdge System Compatible ONLY - DC Coupled",
            image: "https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2025/05/Sigenergy-logo-1.png"
        },
        {
            brand: "Sungrow",
            price: "From just $8,190 installed",
            description: "Reliable and robust solar energy storage designed for high efficiency.",
            compatibility: "Compatible with Most Inverters - AC or DC Coupled",
            image: "https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2018/10/sungrow-logo.png"
        },
        {
            brand: "SolarEdge",
            price: "From just $9,770 installed",
            description: "Advanced DC-coupled battery seamlessly integrating with your SolarEdge exact ecosystem.",
            compatibility: "Compatible with Most Inverters - AC or DC Coupled",
            image: "https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2018/12/solaredge-logo.png"
        },
        {
            brand: "Tesla Powerwall 3",
            price: "From just $14,790 installed",
            description: "The ultimate energy independence system with blackout protection.",
            compatibility: "AC/DC Coupled - Stackable and Expandable",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" // using a clean tesla logo since they used generic text
        }
    ];

    const faqs = [
        {
            q: "Can I install any battery I want?",
            a: "No. You need to make sure that the battery you are looking at will be compatible with your current system. Call us to discuss this more."
        },
        {
            q: "Can I fit any size battery?",
            a: "Yes.. but, there’s no point installing a large capacity battery (say 10kWh or more) if you only have a small existing solar system (say 2kW). To charge your battery you need enough surplus solar power to charge it, and an incorrectly sized system could mean that your expensive battery is never even charged! Get in touch with us, we can ensure your solar and battery system is designed correctly."
        },
        {
            q: "Will my existing solar inverter work with any battery?",
            a: "Not necessarily. Depending on which battery you want to install, you may need to upgrade to a modern hybrid inverter or one compatible with the battery you are looking to purchase. AC-coupled battery systems are compatible with most inverters whereas DC-coupled systems are more specific. We can help with this decision so give us a call."
        },
        {
            q: "What's the difference between AC and DC-coupled?",
            a: "AC-coupled and DC coupled describes how the battery is charged with your surplus solar power. An AC-coupled system will have the solar inverter convert your surplus solar power into AC power. The battery will then take this surplus AC power and convert it back to DC to charge the battery. This system is compatible with most existing solar inverters but isn’t the most efficient due to the number of steps in the charging process. DC-coupled systems take any surplus DC power straight from the solar panels and charge the batteries with it. This is a more efficient way to charge batteries but requires a hybrid inverter, so it’s not compatible with most existing solar inverters."
        },
        {
            q: "Are solar house batteries safe?",
            a: "You’ve heard of lithium battery fires before, and most solar home batteries use lithium technology. It is important to note though that not all lithium batteries are the same, there are actually some big differences. The batteries that we offer all use lithium-iron phosphate cells (LiFePO4) which have a far superior safety profile compared to other lithium-ion chemistries. Combine this with the stringent safety requirements the quality manufacturers adhere to coupled with the thorough Australian Standard installation guidelines that we install to and you can rest assured that your battery system will provide safe reliable power for many years to come."
        }
    ];

    return (
        <div className="bg-slate-950 pt-20">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-amber-500/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-medium mb-8">
                                <Battery className="w-4 h-4" />
                                <span>Advanced Energy Storage</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
                                Stop Wasting Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Surplus Power.</span>
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                                Store your excess daytime solar energy to power your home through the night and protect yourself during grid outages.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {['Slash peak-hour energy costs', 'Grid outage blackout protection', 'Increase solar self-consumption', 'VPP (Virtual Power Plant) ready'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="px-8 py-4 text-lg font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-full transition-all shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                                Talk to a Battery Expert
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-square bg-slate-900 rounded-full absolute inset-0 blur-3xl opacity-50" />
                            <img
                                src="https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2016/04/Tesla-Powerwall-2-Dimensions.jpg"
                                alt="Tesla Powerwall installation"
                                className="relative z-10 w-full h-auto rounded-3xl border border-white/10 shadow-2xl object-cover aspect-[4/3]"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Products Range */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 z-10 relative">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Premium Battery Solutions</h2>
                        <p className="text-lg text-slate-400">
                            We only supply tier-1 batteries featuring ultra-safe LiFePO4 chemistry and proven longevity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-900/50 border-t border-white/5 relative">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Common Home Solar Battery FAQ's</h2>
                        <p className="text-slate-400">Everyone has a few questions, so here are the most common.</p>
                    </div>

                    <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                        {faqs.map((faq, index) => (
                            <FAQAccordion key={index} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
