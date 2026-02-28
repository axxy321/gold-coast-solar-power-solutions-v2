import { ArrowRight, ShieldCheck, Zap, Award, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-slate-950">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img src="https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2022/12/solar-panel-installation-gold-coast-reliable-services.jpg" alt="Solar Installation" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-6">
                                <Zap className="w-4 h-4" />
                                <span>Premium Solar Solutions</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6">
                                Powering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Gold Coast</span> With Clean Energy
                            </h1>

                            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                                Expert solar panel and battery installations for your home or business. Reduce your power bills and secure your energy future.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                                    Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-all border border-slate-700">
                                    Our Services
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full"></div>
                            <img
                                src="https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2025/07/Best-solar-panel-installation-in-gold-coast.webp"
                                alt="Solar Panels"
                                className="relative z-10 rounded-2xl border border-white/10 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-20 pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4 items-center justify-between text-slate-400 text-sm font-medium"
                    >
                        <div className="flex items-center gap-4">
                            <img src="https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2018/10/ja-solar-logo.png" className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity bg-white px-2 py-1 rounded" alt="JA Solar" />
                            <img src="https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2018/10/sungrow-logo.png" className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity bg-white px-2 py-1 rounded" alt="Sungrow" />
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-amber-500" />
                                <span>Clean Energy Council Approved</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5 text-amber-500" />
                                <span>15+ Years Experience</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-24 bg-slate-900 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-amber-500 font-medium tracking-wide border border-amber-500/30 px-4 py-1 rounded-full uppercase text-sm mb-4 inline-block bg-amber-500/10">Our Expertise</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Comprehensive Energy Solutions</h3>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">We provide end-to-end solar solutions designed to maximize efficiency and savings for your specific energy needs.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Residential Solar", desc: "Cut your home energy bills drastically with our premium tier-1 solar panel installations.", icon: <Sun className="w-8 h-8" /> },
                            { title: "Commercial Solar", desc: "Protect your business bottom line from rising energy costs with large-scale solar arrays.", icon: <ArrowRight className="w-8 h-8" /> },
                            { title: "Solar Batteries", desc: "Store your excess solar power during the day to use at night or during blackouts.", icon: <Zap className="w-8 h-8" /> }
                        ].map((service, i) => (
                            <div key={i} className="bg-slate-950 p-8 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors group">
                                <div className="text-amber-500 mb-6 bg-amber-500/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
                                <p className="text-slate-400 leading-relaxed mb-6">{service.desc}</p>
                                <Link to="/services" className="text-amber-500 font-medium flex items-center gap-2 hover:text-amber-400">
                                    Learn more <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
