import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import DispatcherImage from "@/assets/dispatcher-bike.png";

export const PartnerRegistrationSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 md:py-20 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
          {/* Background image */}
          <img
            src={DispatcherImage}
            alt="Dispatcher on bike"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Teal overlay */}
          <div className="absolute inset-0 bg-[#006767]/80" />

          <div className="relative z-10 py-10 md:py-20 px-6 md:px-14">
            <div className="max-w-lg space-y-6 animate-fade-in">
              <span className="inline-block text-white/70 text-sm font-semibold tracking-wide uppercase">
                Join our Dispatcher Fleet
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                Earn professional rates while delivering essential healthcare
                services across your city.
              </h2>

              <Button
                onClick={() => navigate("/dispatcher")}
                className="rounded-full px-8 py-3 h-auto text-sm font-bold bg-white text-primary hover:bg-white/90 border-2 border-white shadow-lg"
              >
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
