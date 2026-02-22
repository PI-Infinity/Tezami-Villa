import React, { useMemo } from "react";

export default function Prices() {
  const whatsappNumber = "995577138372";
  const whatsappText =
    "Hello, I want to rent a car in Georgia. Please send prices and availability.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappText,
  )}`;

  const rows = useMemo(
    () => [
      {
        title: "Daily Rental",
        price: "From $18 / day",
        desc: "Best for short stays",
      },
      {
        title: "Weekly Rental",
        price: "From $32 / day",
        desc: "Better value for travelers",
        highlight: true,
      },
      {
        title: "Monthly Rental",
        price: "From $60 / day",
        desc: "Best price for long-term",
      },
    ],
    [],
  );

  return (
    <section
      id="prices"
      className="relative w-full bg-[#080808] py-20 sm:py-28 px-4"
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(55%_55%_at_50%_20%,rgba(212,175,55,0.12),transparent_60%)]" />

      <div className="relative mx-auto sm:px-32">
        {/* header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Prices &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#E6C76A]">
              Packages
            </span>
          </h2>
          <p className="mt-4 text-white/70">
            Transparent pricing. No hidden fees.
          </p>
        </div>

        {/* table */}
        <div className="mt-14 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
          {rows.map((row, i) => (
            <div
              key={row.title}
              className={`
                grid grid-cols-1 sm:grid-cols-3 gap-6 items-center
                px-6 py-6
                border-b border-white/10 last:border-none
                ${row.highlight ? "bg-white/10" : ""}
              `}
            >
              <div>
                <div className="text-white font-extrabold text-lg">
                  {row.title}
                </div>
                <div className="text-white/60 text-sm mt-1">{row.desc}</div>
              </div>

              <div className="text-white font-extrabold text-xl sm:text-center">
                {row.price}
              </div>

              <div className="sm:text-right">
                <a
                  href={whatsappUrl}
                  className="
                    inline-flex items-center justify-center
                    rounded-2xl px-5 py-3
                    font-bold text-sm
                    bg-[#D4AF37] text-black
                    shadow-lg shadow-black/25
                    hover:brightness-110 active:scale-[0.99] transition
                    w-full sm:w-auto
                  "
                >
                  Check Availability
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* included */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-[#D4AF37] font-extrabold">Included</div>
            <div className="text-white/70 text-sm mt-1">
              Clean, ready-to-drive cars
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-[#D4AF37] font-extrabold">Flexible</div>
            <div className="text-white/70 text-sm mt-1">
              Daily • Weekly • Monthly
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-[#D4AF37] font-extrabold">Support</div>
            <div className="text-white/70 text-sm mt-1">
              Local 24/7 assistance
            </div>
          </div>
        </div>

        {/* bottom note */}
        <p className="mt-6 text-center text-xs text-white/55">
          Final price depends on car model, rental duration, and season.
        </p>
      </div>
    </section>
  );
}
