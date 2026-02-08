import { ArrowRight, CheckCircle2 } from "lucide-react";

export const HowItWorksSection = () => {
    return (
        <section className="py-12 px-4 md:py-24 md:px-6 bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl bg-[#0A1128] rounded-[3rem] py-16 px-6 md:py-24 md:px-12 text-white relative">
                <div className="text-center mb-20 animate-fade-in relative z-10">
                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-black mb-8 leading-tight text-white">
                        A platform for you to get the <span className="text-primary">lab test faster.</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Our app has two main features: the ability to book a licensed medical professional to come to you and perform a lab test, and the ability for medical professionals to accept requests and earn money on their own schedule. Here's how it works:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                    {/* Step 1: Book tests */}
                    <div className="flex flex-col items-center animate-fade-in [animation-delay:200ms]">
                        <div className="bg-[#151F3C] p-6 pb-0 rounded-[3rem] shadow-2xl mb-10 w-full max-w-[340px] aspect-[9/16] relative overflow-hidden border border-slate-700/50 group">
                            {/* Phone Status Bar */}
                            <div className="flex justify-between items-center px-6 py-4 opacity-50">
                                <div className="text-[10px] font-medium">9:41</div>
                                <div className="flex gap-1">
                                    <div className="w-3 h-2 bg-white rounded-[1px]"></div>
                                    <div className="w-3 h-2 bg-white rounded-[1px]"></div>
                                </div>
                            </div>

                            {/* Mock App Interface - Book Test */}
                            <div className="bg-[#F8FAFC] h-full rounded-t-[2.5rem] p-6 text-slate-900 shadow-inner">
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                                    </div>
                                    <div className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-xs text-slate-400">
                                        What test are you requesting today?
                                    </div>
                                </div>

                                <h4 className="text-sm font-bold mb-4">Available test</h4>

                                <div className="space-y-3">
                                    {[
                                        { title: "COVID 19 Qualitative Prc throat swab", status: "Available between 6am - 9pm" },
                                        { title: "Rapid diagnostic test", status: "Available between 6am - 9pm" },
                                        { title: "Full Blood Count", status: "Available between 6am - 9pm" },
                                    ].map((test, i) => (
                                        <div key={i} className="bg-white border border-slate-100 rounded-2xl p-4 flex justify-between items-center group-hover:border-primary/30 transition-colors">
                                            <div className="space-y-1">
                                                <div className="text-[11px] font-bold leading-tight">{test.title}</div>
                                                <div className="flex items-center gap-1">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-[9px] text-slate-500 font-medium">{test.status}</span>
                                                </div>
                                            </div>
                                            <ArrowRight size={14} className="text-slate-300 group-hover:text-primary transition-colors" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="text-center group">
                            <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors text-white">Book tests available</h3>
                            <p className="text-slate-400 max-w-[300px] leading-relaxed">
                                Easily book a licensed medical professional to come to your home and perform a lab test. Select your test, date, and time.
                            </p>
                        </div>
                    </div>

                    {/* Step 2: Get results */}
                    <div className="flex flex-col items-center animate-fade-in [animation-delay:400ms]">
                        <div className="bg-[#151F3C] p-6 pb-0 rounded-[3rem] shadow-2xl mb-10 w-full max-w-[340px] aspect-[9/16] relative overflow-hidden border border-slate-700/50 group">
                            {/* Phone Status Bar */}
                            <div className="flex justify-between items-center px-6 py-4 opacity-50">
                                <div className="text-[10px] font-medium">9:41</div>
                                <div className="flex gap-1">
                                    <div className="w-3 h-2 bg-white rounded-[1px]"></div>
                                    <div className="w-3 h-2 bg-white rounded-[1px]"></div>
                                </div>
                            </div>

                            {/* Mock App Interface - Results */}
                            <div className="bg-[#F8FAFC] h-full rounded-t-[2.5rem] p-6 text-slate-900 shadow-inner">
                                <div className="flex items-center mb-8">
                                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                                        <ArrowRight className="rotate-180 w-4 h-4 text-slate-600" />
                                    </div>
                                </div>

                                <div className="space-y-10 relative">
                                    {/* Timeline Line */}
                                    <div className="absolute left-[11px] top-3 bottom-0 w-[2px] bg-slate-100"></div>

                                    {[
                                        { title: "Sample collected", time: "20/02, 02:00PM", sub: "Your sample has been collected", active: true },
                                        { title: "Result ready", time: "21/02, 06:30AM", sub: "Your test results are ready", active: true },
                                        { title: "Result sent", time: "21/02, 06:30AM", sub: "Your test results have been sent to you", active: true },
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-5 relative group/item">
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${step.active ? 'bg-green-500' : 'bg-slate-200'}`}>
                                                {step.active && <CheckCircle2 size={14} className="text-white" />}
                                            </div>
                                            <div className="bg-white border border-slate-100 rounded-2xl p-4 flex-1 shadow-sm group-hover/item:border-primary/20 transition-colors">
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="text-xs font-bold">{step.title}</span>
                                                    <span className="text-[8px] text-slate-400 font-medium">{step.time}</span>
                                                </div>
                                                <p className="text-[10px] text-slate-500">{step.sub}</p>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="pt-4">
                                        <button className="w-full bg-[#22C55E] text-white py-4 rounded-xl text-sm font-bold shadow-lg shadow-green-200 hover:bg-[#16a34a] transition-all active:scale-95">
                                            View result
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center group">
                            <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors text-white">Get your results</h3>
                            <p className="text-slate-400 max-w-[300px] leading-relaxed">
                                Track the progress of your test and get your results right from your mobile device.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
