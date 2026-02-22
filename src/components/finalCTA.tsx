import React, { useMemo } from "react";

export default function FinalCTA() {
  const whatsappNumber = "995599000000"; // ✅ შეცვალე
  const whatsappText =
    "Hello, I want to rent a premium car in Georgia. Please send available cars, prices, and delivery options.";
  const whatsappUrl = useMemo(
    () =>
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`,
    [],
  );

  return (
    <section
      id="contact"
      className="relative w-full bg-[#080808] py-20 sm:py-28 px-4"
    >
      {/* strong premium glow */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(55%_55%_at_50%_30%,rgba(212,175,55,0.18),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />

      <div className="relative mx-auto sm:px-32">
        {/* big banner */}
        <div className="rounded-[2.25rem] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl shadow-black/30">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* left */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
                <span className="text-xs sm:text-sm text-white/80">
                  Fast booking • Georgia
                </span>
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05] text-white">
                Ready to drive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#E6C76A]">
                  premium
                </span>{" "}
                in Georgia?
              </h2>

              <p className="mt-5 max-w-xl text-white/75 text-base sm:text-lg leading-relaxed">
                Message us on WhatsApp and we’ll reply quickly with
                availability, prices, and delivery options.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  className="
                    inline-flex items-center justify-center
                    rounded-2xl px-7 py-4
                    font-extrabold text-base
                    bg-[#D4AF37] text-black
                    shadow-xl shadow-black/25
                    hover:brightness-110 active:scale-[0.99] transition
                    w-full sm:w-auto
                  "
                >
                  Book on WhatsApp
                </a>

                <a
                  href="tel:+995599000000" // ✅ შეცვალე
                  className="
                    inline-flex items-center justify-center
                    rounded-2xl px-7 py-4
                    font-extrabold text-base
                    bg-white/10 text-white
                    border border-white/15
                    hover:bg-white/15 active:scale-[0.99] transition
                    w-full sm:w-auto
                  "
                >
                  Call Now
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-white/60">
                <span>• Delivery available</span>
                <span>• Airport pickup</span>
                <span>• Clean cars</span>
                <span>• Insurance options</span>
              </div>
            </div>

            {/* right visual */}
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
              <img
                src="/cover-day.webp" // ✅ შეცვალე ფოტო
                alt="LUX CAR RENT"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              {/* mini card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-black/35 backdrop-blur-xl p-5">
                <div className="text-white font-extrabold">
                  Premium Rental Cars
                </div>
                <div className="mt-1 text-white/70 text-sm">
                  Georgia • Fast confirmation
                </div>
                <div className="mt-3 h-px w-full bg-white/10" />
                <div className="mt-3 flex items-center justify-between text-xs text-white/60">
                  <span>WhatsApp booking</span>
                  <span className="text-[#D4AF37] font-bold">● Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* small footer note */}
        <p className="mt-8 text-center text-xs text-white/55">
          LUX CAR RENT — Premium rental cars in Georgia.
        </p>
      </div>
    </section>
  );
}
