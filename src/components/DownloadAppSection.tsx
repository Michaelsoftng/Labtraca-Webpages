import { Button } from "@/components/ui/button";
import { Handshake, Smartphone } from "lucide-react";

export const DownloadAppSection = () => {
  const featuredImage = "/download/four.jpg";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-primary/5 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_55%)]" />
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <div className="mx-auto lg:mx-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Smartphone className="h-8 w-8" />
            </div>
            <h2 className="mt-8 text-4xl font-black text-foreground lg:text-5xl">Download the app</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Order diagnostics and track samples in real time with the Labtraca mobile app.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button
                size="lg"
                className="h-16 w-full max-w-[220px] rounded-2xl bg-black px-8 text-base text-white hover:bg-black/90"
              >
                <svg className="h-6 w-6 text-white" viewBox="0 0 814 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
                </svg>
                <div className="text-left">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Download on the</p>
                  <p className="text-lg font-semibold leading-tight text-white">App Store</p>
                </div>
              </Button>
              <Button
                size="lg"
                className="h-16 w-full max-w-[220px] rounded-2xl bg-black px-8 text-base text-white hover:bg-black/90"
              >
                <svg className="h-6 w-6" viewBox="0 0 28.5 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.54 15.28.12 29.34a3.64 3.64 0 0 0 5.33 2.16l15.1-8.6z" fill="#EA4335" />
                  <path d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.55 3.55 0 0 0 0-6.29z" fill="#FBBC05" />
                  <path d="M.12 2.66a3.46 3.46 0 0 0-.12.92v24.84a3.66 3.66 0 0 0 .12.92L14 15.64Z" fill="#4285F4" />
                  <path d="m13.64 16 6.94-6.85L5.5.51A3.72 3.72 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z" fill="#34A853" />
                </svg>
                <div className="text-left">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Get it on</p>
                  <p className="text-lg font-semibold leading-tight">Google Play</p>
                </div>
              </Button>
            </div>
            <div className="mt-10 flex items-center justify-center gap-3 text-sm font-semibold text-primary lg:justify-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Handshake className="h-6 w-6" />
              </div>
              <span>Your trusted diagnostics partner</span>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-64 sm:w-80 md:w-96">
              <div className="rounded-[36px] border-[10px] border-white bg-white shadow-[0_35px_70px_rgba(0,0,0,0.18)]">
                <img src={featuredImage} alt="Labtraca app screen" className="h-full w-full rounded-[24px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};