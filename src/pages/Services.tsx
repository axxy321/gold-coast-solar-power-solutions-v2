import { CheckCircle2, Factory, Home as HomeIcon, BatteryCharging } from 'lucide-react';

export default function Services() {
    const services = [
        {
            id: "residential",
            title: "Residential Solar",
            description: "Take control of your home's power bills. Our residential solar packages use Tier 1 panels and premium inverters to ensure maximum efficiency and an industry-leading lifespan.",
            icon: <HomeIcon className="w-12 h-12 text-amber-500" />,
            features: ["Custom system design", "Tier 1 panels (JA Solar, REC)", "Premium Inverters (Sungrow, Fronius)", "Professional CEC accredited installation", "25-year performance warranty"]
        },
        {
            id: "commercial",
            title: "Commercial Solar",
            description: "Protect your bottom line against rising energy prices. We design and install large-scale commercial solar systems tailored to your business's load profile.",
            icon: <Factory className="w-12 h-12 text-amber-500" />,
            features: ["Detailed ROI & payback analysis", "Demand tariff management", "Large scale system engineering", "Minimal business disruption during install", "Ongoing maintenance & monitoring"]
        },
        {
            id: "batteries",
            title: "Solar Batteries",
            description: "Don't let your excess solar energy go to waste. Store it during the day to power your home at night, and stay protected during grid outages.",
            icon: <BatteryCharging className="w-12 h-12 text-amber-500" />,
            features: ["Tesla Powerwall Certified", "Sungrow Battery Integration", "Retrofit existing solar systems", "Blackout protection", "Virtual Power Plant (VPP) ready"]
        }
    ];

    return (
        <div className="bg-slate-950 pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Services</span></h1>
                    <p className="text-xl text-slate-400">
                        Gold Coast Solar Power Solutions provides industry-leading solar and battery installations tailored specifically to your energy needs.
                    </p>
                </div>

                <div className="space-y-24">
                    {services.map((service, index) => (
                        <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-1/2">
                                <div className="bg-slate-900 border border-white/5 aspect-video rounded-2xl overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-amber-500/10 group-hover:bg-transparent transition-colors z-10"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-700">
                                        {service.icon}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="inline-flex p-3 rounded-xl bg-slate-900 border border-white/5 mb-2">
                                    {service.icon}
                                </div>
                                <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                                <p className="text-slate-400 text-lg leading-relaxed">{service.description}</p>

                                <ul className="space-y-3 pt-4">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300">
                                            <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
