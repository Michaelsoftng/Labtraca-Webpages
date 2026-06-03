import { Pill, ClipboardList, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

const networks = [
  {
    icon: Pill,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    title: "Pharmacy Partnership",
    description:
      "Join our network of dispensaries to provide verified medication delivery.",
    path: "/partner-with-us",
  },
  {
    icon: ClipboardList,
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
    title: "Medical Tests",
    description:
      "Partner with us to offer professional diagnostic screening to a wider audience.",
    path: "/app/tests",
  },
  {
    icon: UserRound,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
    title: "Join our Phlebotomy Team",
    description:
      "Deliver care where it matters most. Join our team of certified professionals for home collection.",
    path: "/phlebotomist",
  },
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 md:py-24 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-6 md:mb-10">
          Our Service Networks
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {networks.map((network, i) => (
            <div
              key={i}
              onClick={() => navigate(network.path)}
              className="bg-[#E9EDFF] border border-gray-200 rounded-2xl p-5 md:p-7 flex flex-col gap-4 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center`}
              >
                <network.icon className={`w-5 h-5 text-primary`} />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-gray-900">{network.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {network.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
