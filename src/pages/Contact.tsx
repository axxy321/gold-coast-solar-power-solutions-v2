import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
    return (
        <div className="bg-slate-950 min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact <span className="text-amber-500">Us</span></h1>
                    <p className="text-xl text-slate-400">
                        Ready to make the switch to solar? Get in touch with our expert team today for a free, no-obligation quote and site assessment.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className="space-y-10">
                        <div className="bg-slate-900 p-8 rounded-2xl border border-white/5">
                            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>

                            <div className="space-y-6">
                                <a href="tel:1300000000" className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                                        <Phone className="w-6 h-6 text-amber-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-slate-500 mb-1">Call Us Today</h4>
                                        <p className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">1300 000 000</p>
                                    </div>
                                </a>

                                <a href="mailto:info@goldcoastsolarpowersolutions.com.au" className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                                        <Mail className="w-6 h-6 text-amber-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-slate-500 mb-1">Email Us</h4>
                                        <p className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">info@goldcoastsolarpowersolutions.com.au</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                                        <MapPin className="w-6 h-6 text-amber-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-slate-500 mb-1">Our Location</h4>
                                        <p className="text-lg font-bold text-white">Gold Coast, QLD</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Map Placeholder */}
                        <div className="bg-slate-900 aspect-video rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center group cursor-pointer">
                            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=-28.016666,153.399994&zoom=11&size=800x400&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x746855&style=feature:all|element:labels.text.stroke|color:0x242f3e&style=feature:administrative.locality|element:labels.text.fill|color:0xd59563&style=feature:water|element:geometry|color:0x17263c')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity grayscale invert"></div>
                            <div className="absolute inset-0 bg-slate-950/40"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <MapPin className="w-10 h-10 text-amber-500 mb-2 animate-bounce" />
                                <span className="text-white font-medium bg-slate-950/80 px-4 py-2 rounded-full backdrop-blur-sm">Servicing the Gold Coast</span>
                            </div>
                        </div>

                    </div>

                    {/* Lead Capture Form */}
                    <div className="bg-slate-900 p-8 md:p-12 rounded-2xl border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

                        <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Request a Free Quote</h3>

                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400">First Name</label>
                                    <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400">Last Name</label>
                                    <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Email Address</label>
                                <input type="email" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Phone Number</label>
                                <input type="tel" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="0400 000 000" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Service of Interest</label>
                                <select className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors min-h-[50px] appearance-none">
                                    <option>Residential Solar Installation</option>
                                    <option>Commercial Solar Installation</option>
                                    <option>Solar Battery Storage</option>
                                    <option>System Maintenance & Repair</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Message (Optional)</label>
                                <textarea rows={4} className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none" placeholder="Tell us about your energy needs..."></textarea>
                            </div>

                            <button className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-xl transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(245,158,11,0.2)] mt-8">
                                Submit Request <Send className="ml-2 w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
