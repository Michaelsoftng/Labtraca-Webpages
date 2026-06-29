import { Link } from "react-router-dom";
import {
  Bell,
  User,
  Check,
  FileText,
  FlaskConical,
  Menu,
  Calendar,
  Microscope,
  MessageSquare,
} from "lucide-react";

const checklist = [
  "Book lab tests on the go",
  "Chat with doctors anytime",
  "Track your samples in real-time",
];

const PhoneMockup = ({ size = "lg" }: { size?: "lg" | "sm" }) => {
  const isSmall = size === "sm";
  return (
    <div className={isSmall ? "w-32" : "w-64"}>
      <div className={`bg-[#1a1f24] rounded-[1.75rem] shadow-2xl ${isSmall ? "p-1.5" : "p-2.5"}`}>
        <div className="bg-white rounded-[1.4rem] overflow-hidden">
          <div className={`flex items-center justify-between ${isSmall ? "px-2.5 pt-2.5 pb-1" : "px-4 pt-4 pb-2"}`}>
            <span className={`font-bold text-primary ${isSmall ? "text-[9px]" : "text-sm"}`}>Labtraca</span>
            <Menu className={isSmall ? "w-2.5 h-2.5 text-gray-400" : "w-4 h-4 text-gray-400"} />
          </div>
          <div className={isSmall ? "px-2.5 pb-2.5 space-y-1.5" : "px-4 pb-4 space-y-3"}>
            <div className={`bg-white border border-border rounded-lg shadow-sm ${isSmall ? "p-1.5" : "p-3"}`}>
              <p className={isSmall ? "text-[6px] text-muted-foreground" : "text-[10px] text-muted-foreground"}>
                Next Booking
              </p>
              <p className={`font-bold text-foreground ${isSmall ? "text-[8px]" : "text-sm"}`}>Lab Test #4920</p>
              <div className={`flex items-center gap-1 text-muted-foreground mt-0.5 ${isSmall ? "text-[6px]" : "text-[10px]"}`}>
                <Calendar className={isSmall ? "w-1.5 h-1.5" : "w-3 h-3"} />
                Oct 24, 09:30 AM
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className={`bg-teal-surface rounded-lg flex flex-col items-center gap-0.5 ${isSmall ? "p-1" : "p-2"}`}>
                <Microscope className={isSmall ? "w-2.5 h-2.5 text-primary" : "w-4 h-4 text-primary"} />
                <span className={`font-semibold text-primary ${isSmall ? "text-[6px]" : "text-[10px]"}`}>Tests</span>
              </div>
              <div className={`bg-muted rounded-lg flex flex-col items-center gap-0.5 ${isSmall ? "p-1" : "p-2"}`}>
                <MessageSquare className={isSmall ? "w-2.5 h-2.5 text-gray-500" : "w-4 h-4 text-gray-500"} />
                <span className={`font-semibold text-gray-600 ${isSmall ? "text-[6px]" : "text-[10px]"}`}>Chat</span>
              </div>
            </div>
            <div className={`rounded-lg bg-gradient-to-br from-primary to-primary/70 relative overflow-hidden ${isSmall ? "h-12" : "h-24"}`}>
              <div className="absolute inset-0 flex items-end gap-1 px-2 pb-2">
                {[40, 65, 50, 80, 60].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-white/40 rounded-t-sm"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className={`absolute rounded-full bg-white/90 flex items-center justify-center ${isSmall ? "top-1 right-1 w-3 h-3" : "top-2 right-2 w-6 h-6"}`}>
                <User className={isSmall ? "w-1.5 h-1.5 text-primary" : "w-3 h-3 text-primary"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppleIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 814 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 28.5 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.54 15.28.12 29.34a3.64 3.64 0 0 0 5.33 2.16l15.1-8.6z" fill="#ea4335" />
    <path d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.55 3.55 0 0 0 0-6.29z" fill="#fbbc04" />
    <path d="M.12 2.66a3.46 3.46 0 0 0-.12.92v24.84a3.66 3.66 0 0 0 .12.92L14 15.64Z" fill="#4285f4" />
    <path d="m13.64 16 6.94-6.85L5.5.51A3.72 3.72 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z" fill="#34a853" />
  </svg>
);

// Deterministic pseudo-QR pattern: real finder squares at three corners,
// noise elsewhere — decorative only, not a scannable code.
const QR_SIZE = 21;
const inFinder = (r: number, c: number) => {
  const corners: [number, number][] = [[0, 0], [0, QR_SIZE - 7], [QR_SIZE - 7, 0]];
  return corners.some(([cr, cc]) => r >= cr && r < cr + 7 && c >= cc && c < cc + 7);
};
const finderFilled = (r: number, c: number) => {
  const corners: [number, number][] = [[0, 0], [0, QR_SIZE - 7], [QR_SIZE - 7, 0]];
  const [cr, cc] = corners.find(([cr0, cc0]) => r >= cr0 && r < cr0 + 7 && c >= cc0 && c < cc0 + 7)!;
  const lr = r - cr;
  const lc = c - cc;
  if (lr === 0 || lr === 6 || lc === 0 || lc === 6) return true;
  return lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4;
};
const qrMatrix: boolean[][] = Array.from({ length: QR_SIZE }, (_, r) =>
  Array.from({ length: QR_SIZE }, (_, c) =>
    inFinder(r, c) ? finderFilled(r, c) : (r * 31 + c * 17 + 7) % 5 < 2,
  ),
);

const QrCode = ({ size = 96 }: { size?: number }) => (
  <div
    className="grid bg-white"
    style={{ width: size, height: size, gridTemplateColumns: `repeat(${QR_SIZE}, 1fr)` }}
  >
    {qrMatrix.flatMap((row, r) =>
      row.map((filled, c) => (
        <div key={`${r}-${c}`} className={filled ? "bg-foreground" : "bg-white"} />
      )),
    )}
  </div>
);

const Checklist = ({ itemClassName }: { itemClassName?: string }) => (
  <>
    {checklist.map((item) => (
      <div key={item} className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-teal-surface flex items-center justify-center flex-shrink-0">
          <Check className="w-4 h-4 text-primary" />
        </div>
        <span className={itemClassName || "text-sm font-bold text-foreground"}>{item}</span>
      </div>
    ))}
  </>
);

const NowAvailableBadge = () => (
  <span className="inline-block text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
    Now Available
  </span>
);

const AppStoreButtons = ({ stacked }: { stacked?: boolean }) => (
  <div className={stacked ? "flex flex-col gap-3" : "flex flex-col sm:flex-row gap-4"}>
    <button className="flex items-center justify-center gap-3 bg-foreground text-white rounded-xl h-14 px-6">
      <AppleIcon />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] uppercase tracking-wide opacity-80">Download on the</span>
        <span className="text-base font-bold">App Store</span>
      </span>
    </button>
    <button className="flex items-center justify-center gap-3 bg-white border border-border text-foreground rounded-xl h-14 px-6">
      <GooglePlayIcon />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">Get it on</span>
        <span className="text-base font-bold">Google Play</span>
      </span>
    </button>
  </div>
);

const OurApp = () => {
  return (
    <div className="min-h-screen bg-canvas flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-border">
        {/* Mobile */}
        <div className="sm:hidden flex items-center justify-between px-4 h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            Labtraca
          </Link>
          <button aria-label="Notifications" className="text-foreground/70">
            <Bell className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden sm:flex items-center justify-between px-4 md:px-8 h-16 container mx-auto max-w-6xl">
          <Link to="/" className="text-xl font-bold text-primary">
            Labtraca
          </Link>
          <nav className="flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold text-primary">
              Home
            </Link>
            <Link to="/health-ecosystem" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button aria-label="Notifications" className="text-foreground/70 hover:text-primary transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-9 h-9 rounded-full bg-teal-surface border border-teal-subtle flex items-center justify-center">
              <User className="w-4 h-4 text-teal-muted" />
            </div>
          </div>
        </div>
      </header>

      {/* ─── MOBILE ─── */}
      <main className="sm:hidden flex-1 px-4 pt-8 pb-16">
        <NowAvailableBadge />
        <h1 className="text-3xl font-black text-foreground leading-tight mt-3 mb-3">
          Access Full Features on Our Mobile App
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          The full web version is coming soon. For now, manage your entire health
          journey directly from your pocket.
        </p>

        <div className="bg-white rounded-2xl border border-border shadow-sm p-5 space-y-4 mb-6">
          <Checklist />
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-navy p-5 mb-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,179,179,0.35),_transparent_70%)]" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-white" />
                <span className="text-white font-bold text-sm">Full Panel Test</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wide text-primary bg-white/90 px-2 py-1 rounded-full">
                In Progress
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-white/20 overflow-hidden mb-2">
              <div className="h-full w-3/4 bg-primary rounded-full" />
            </div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-wide text-white/60 mb-5">
              <span>Sample Collected</span>
              <span>Result Pending</span>
            </div>
            <div className="relative flex justify-center pb-2">
              <PhoneMockup size="sm" />
              <div className="absolute -top-2 left-8 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary" />
              </div>
              <div className="absolute -top-2 right-8 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center">
                <FlaskConical className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <AppStoreButtons stacked />
        </div>

        <div className="bg-white rounded-2xl border border-border p-5 flex items-center gap-4">
          <QrCode size={88} />
          <div>
            <p className="font-bold text-sm text-foreground">Scan to download</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Point your camera at the screen
            </p>
          </div>
        </div>
      </main>

      {/* ─── DESKTOP ─── */}
      <main className="hidden sm:flex flex-1 items-center px-4 md:px-8">
        <div className="container mx-auto max-w-6xl grid grid-cols-2 gap-16 items-center py-16">
          <div className="relative flex justify-center">
            <div className="absolute w-[320px] h-[320px] rounded-full bg-primary/10 blur-3xl" />
            <div className="relative z-10 drop-shadow-2xl">
              <PhoneMockup size="lg" />
            </div>
          </div>

          <div>
            <NowAvailableBadge />
            <h1 className="text-5xl font-black text-foreground leading-tight mt-3 mb-4">
              Access Full Features on Our Mobile App
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg mb-8">
              Unlock the complete Labtraca experience. Manage your entire health
              journey with precision and clinical clarity directly from your
              pocket.
            </p>

            <div className="space-y-4 mb-8">
              <Checklist itemClassName="text-base font-bold text-foreground" />
            </div>

            <div className="mb-8">
              <AppStoreButtons />
            </div>

            <div className="bg-white border border-border rounded-2xl p-5 flex items-center gap-4 max-w-sm">
              <QrCode size={96} />
              <div>
                <p className="font-bold text-sm text-foreground">Scan to download</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Open your phone camera to instantly find us in the store.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-border py-6 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Labtraca Health Logistics. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://sites.google.com/view/labtraca-user/home"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <Link to="/terms-conditions" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="hover:text-foreground transition-colors">
              Help Center
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OurApp;
