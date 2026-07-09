import { Network, Lock, Headphones, ShieldCheck } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-10 md:py-24 md:px-8 lg:bg-card-surface">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-xl md:text-3xl font-black text-foreground mb-6 md:mb-10">
          Why Testraca?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
          {/* Hyper-Local Labs — col 1 always */}
          <div className="col-span-1 order-1 aspect-square sm:aspect-auto overflow-hidden lg:bg-white bg-card-surface border border-teal-subtle rounded-2xl hover:shadow-md transition-shadow">
            <div className="h-full flex flex-col gap-2 sm:gap-3 md:gap-4 p-4 sm:p-5 md:p-7">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                <Network className="w-5 h-5" />
              </div>
              <div className="space-y-1 sm:space-y-1.5">
                <h3 className="font-bold text-foreground text-sm sm:text-base">
                  Hyper-Local Labs
                </h3>
                <p className="text-xs sm:text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  Connected to 200+ certified facilities nearby.
                </p>
              </div>
            </div>
          </div>

          {/* Total Privacy — col 2 always */}
          <div className="col-span-1 order-2 aspect-square sm:aspect-auto overflow-hidden lg:bg-white bg-card-surface border border-teal-subtle rounded-2xl hover:shadow-md transition-shadow">
            <div className="h-full flex flex-col gap-2 sm:gap-3 md:gap-4 p-4 sm:p-5 md:p-7">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div className="space-y-1 sm:space-y-1.5">
                <h3 className="font-bold text-foreground text-sm sm:text-base">
                  Total Privacy
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  End-to-end encrypted medical data handling.
                </p>
              </div>
            </div>
          </div>

          {/* Digital Health Passport — full-width, 3rd on mobile / 4th (last row) on desktop */}
          <div className="col-span-2 sm:col-span-3 order-3 sm:order-4 bg-teal-surface border border-teal-subtle rounded-2xl p-5 md:p-7 flex items-center justify-between gap-4 md:gap-6 hover:shadow-md transition-shadow">
            <div className="space-y-1.5 flex-1">
              <h3 className="font-bold text-foreground text-lg">
                Digital Health Passport
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                All your records in one verified place. Manage your entire
                medical history in one secure digital wallet.
              </p>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* 24/7 Professional Support — full-width on mobile / col 3 on desktop */}
          <div className="col-span-2 sm:col-span-1 order-4 sm:order-3 lg:bg-white bg-card-surface border border-teal-subtle rounded-2xl p-5 md:p-7 flex flex-row sm:flex-col items-start gap-3 md:gap-4 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5" />
            </div>

            <div className="space-y-1.5">
              <h3 className="font-bold text-foreground">
                24/7 Professional Support
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Real clinicians ready to assist you any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
