import { Network, Lock, Headphones, ShieldCheck } from "lucide-react";

const standardItems = [
  {
    icon: Network,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    title: "Hyper-Local Labs",
    description: "Connected to 200+ certified facilities nearby.",
  },
  {
    icon: Lock,
    iconColor: "text-gray-700",
    iconBg: "bg-gray-100",
    title: "Total Privacy",
    description: "End-to-end encrypted medical data handling.",
  },
  {
    icon: Headphones,
    iconColor: "text-gray-700",
    iconBg: "bg-gray-100",
    title: "24/7 Professional Support",
    description: "Real clinicians ready to assist you any time.",
  },
];

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10">
          Why Labtraca?
        </h2>

        <div className="grid sm:grid-cols-3 gap-5 mb-5">
          {standardItems.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-7 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center`}>
                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Health Passport — full-width, icon on the right */}
        <div className="bg-white border border-gray-100 rounded-2xl p-7 flex items-center justify-between gap-6 hover:shadow-md transition-shadow">
          <div className="space-y-1.5 flex-1">
            <h3 className="font-bold text-gray-900 text-lg">Digital Health Passport</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
              All your records in one verified place. Manage your entire medical history in one secure digital wallet.
            </p>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
