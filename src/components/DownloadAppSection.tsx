export const DownloadAppSection = () => {
  return (
    <section id="download" className="py-10 md:py-24 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl text-center space-y-5 md:space-y-6">
        <h2 className="text-2xl md:text-5xl font-black text-foreground leading-tight max-w-2xl mx-auto">
          Ready to prioritize your health?
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto leading-relaxed">
          Download the Testraca app and get started in seconds. Fast, reliable
          diagnostics at your fingertips.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          {/* App Store */}
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-6 py-3.5 transition-colors shadow-sm min-w-[180px]"
          >
            <svg
              viewBox="0 0 814 1000"
              className="w-6 h-6 flex-shrink-0"
              fill="currentColor"
            >
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-white/70 leading-none mb-0.5">
                Get it on
              </div>
              <div className="text-sm font-bold leading-none">App Store</div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-6 py-3.5 transition-colors shadow-sm min-w-[180px]"
          >
            <svg
              viewBox="0 0 28.5 32"
              className="w-6 h-6 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.54 15.28.12 29.34a3.64 3.64 0 0 0 5.33 2.16l15.1-8.6z"
                fill="#ea4335"
              />
              <path
                d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.55 3.55 0 0 0 0-6.29z"
                fill="#fbbc04"
              />
              <path
                d="M.12 2.66a3.46 3.46 0 0 0-.12.92v24.84a3.66 3.66 0 0 0 .12.92L14 15.64Z"
                fill="#4285f4"
              />
              <path
                d="m13.64 16 6.94-6.85L5.5.51A3.72 3.72 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z"
                fill="#34a853"
              />
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-white/70 leading-none mb-0.5">
                Get it on
              </div>
              <div className="text-sm font-bold leading-none">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
