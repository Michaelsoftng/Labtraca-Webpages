import { Pill, ClipboardList, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

const networks = [
  {
    icon: Pill,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    title: "Pharmacy Partnership",
    description:
      "Join our network of dispensaries to provide verified medication delivery.",
    path: "/partner-with-us",
  },
  {
    icon: ClipboardList,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    title: "Medical Tests",
    description:
      "Partner with us to offer professional diagnostic screening to a wider audience.",
    path: "/app/tests",
  },
  {
    icon: UserRound,
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-50",
    title: "Join our Phlebotomy Team",
    description:
      "Deliver care where it matters most. Join our team of certified professionals for home collection.",
    path: "/phlebotomist",
  },
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10">
          Our Service Networks
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {networks.map((network, i) => (
            <div
              key={i}
              onClick={() => navigate(network.path)}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-7 flex flex-col gap-4 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl ${network.iconBg} flex items-center justify-center`}>
                <network.icon className={`w-5 h-5 ${network.iconColor}`} />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-gray-900">{network.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{network.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
