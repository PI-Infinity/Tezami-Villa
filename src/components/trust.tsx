import React, { useMemo } from "react";

export default function Trust() {
  // ✅ თუ ჯერ არ გაქვს რეალური reviews, დატოვე placeholders
  const reviews = useMemo(
    () => [
      {
        name: "Alexander",
        text: "Fast booking and very clean car.",
      },
      {
        name: "David",
        text: "Premium service, smooth delivery in Georgia.",
      },
      {
        name: "Hasan",
        text: "Great communication on WhatsApp.",
      },
    ],
    [],
  );

  return (
    <section
      id="reviews"
      className="relative w-full bg-[#080808] py-20 sm:py-28 px-4"
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_50%_at_50%_20%,rgba(212,175,55,0.10),transparent_60%)]" />

      <div className="relative mx-auto sm:px-32">
        {/* header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#E6C76A]">
              Drivers
            </span>
          </h2>
          <p className="mt-4 text-white/70">
            Premium service in Georgia — built on trust and comfort.
          </p>
        </div>

        {/* trust badges row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            <span className="text-[#D4AF37] font-bold">●</span> Clean Cars
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            <span className="text-[#D4AF37] font-bold">●</span> Fast WhatsApp
            Booking
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            <span className="text-[#D4AF37] font-bold">●</span> Delivery
            Available
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            <span className="text-[#D4AF37] font-bold">●</span> Local Support
            24/7
          </div>
        </div>

        {/* reviews strip (different style) */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="p-7 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0"
              >
                <div className="text-[#D4AF37] font-extrabold text-sm">
                  ★★★★★
                </div>
                <p className="mt-3 text-white/85 text-sm leading-relaxed">
                  “{r.text}”
                </p>
                <div className="mt-5 text-white/60 text-xs">{r.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* mini note */}
        <p className="mt-6 text-center text-xs text-white/55">
          Want real reviews here? Add Google reviews or WhatsApp screenshots
          later.
        </p>
      </div>
    </section>
  );
}
