import { Award, ShieldCheck, ThumbsUp, Users } from 'lucide-react';

export default function About() {
    const stats = [
        { label: "Years Experience", value: "15+", icon: <Award className="w-8 h-8 text-amber-500 mb-4" /> },
        { label: "Systems Installed", value: "5,000+", icon: <ShieldCheck className="w-8 h-8 text-amber-500 mb-4" /> },
        { label: "Happy Customers", value: "100%", icon: <ThumbsUp className="w-8 h-8 text-amber-500 mb-4" /> },
        { label: "Expert Team", value: "12+", icon: <Users className="w-8 h-8 text-amber-500 mb-4" /> },
    ];

    return (
        <div className="bg-slate-950 pb-24">
            {/* Hero */}
            <div className="relative py-24 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-amber-500/5 blur-3xl rounded-full translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About <span className="text-amber-500">Us</span></h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        We are the Gold Coast's most trusted solar experts. Locally owned, operated, and dedicated to delivering clean energy solutions that last.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our History</h2>
                        <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                            <p>
                                Founded over 15 years ago, Gold Coast Solar Power Solutions was built on a simple premise: provide honest advice, premium products, and exceptional workmanship.
                            </p>
                            <p>
                                Unlike generic national retailers, we employ our own local Clean Energy Council (CEC) accredited electricians. This means the people who sell you the system are the same people responsible for its flawless installation and ongoing support.
                            </p>
                            <p>
                                As a family-owned business, our reputation is everything. We don't cut corners, we don't use high-pressure sales tactics, and we only install tier-1 equipment that we would be happy to use on our own homes.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-6">
                            <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center">
                                <ShieldCheck className="w-10 h-10 text-amber-500 mb-3" />
                                <span className="font-semibold text-white">CEC Approved</span>
                                <span className="text-sm text-slate-500">Retailer & Installer</span>
                            </div>
                            <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center">
                                <Award className="w-10 h-10 text-amber-500 mb-3" />
                                <span className="font-semibold text-white">Master Electricians</span>
                                <span className="text-sm text-slate-500">Gold Coast Chapter</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-3xl -rotate-6 transform"></div>
                        <img
                            src="https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2022/12/solar-panel-installation-gold-coast-reliable-services.jpg"
                            alt="Our Team at Work"
                            className="relative z-10 rounded-2xl shadow-2xl border border-white/10"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-32">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center p-8 bg-slate-900 border border-white/5 rounded-2xl hover:border-amber-500/30 transition-colors">
                            <div className="flex justify-center">{stat.icon}</div>
                            <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-slate-400 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
