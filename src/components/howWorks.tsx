import React, { useMemo } from "react";

export default function HowItWorks() {
  const whatsappNumber = "995577138372";
  const whatsappText =
    "Hello, I want to rent a premium car in Georgia. Please send available cars and prices.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappText,
  )}`;

  const steps = [
    {
      title: "Choose Your Car",
      desc: "Browse our premium SUVs and cars.",
    },
    {
      title: "Message Us on WhatsApp",
      desc: "Fast booking with no forms.",
    },
    {
      title: "Get the Keys & Drive",
      desc: "Delivery available in Georgia.",
    },
  ];

  return (
    <section
      id="how"
      className="relative w-full bg-[#080808] py-20 sm:py-28 px-4"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(45%_45%_at_50%_20%,rgba(212,175,55,0.12),transparent_60%)]" />

      <div className="relative mx-auto px-0 sm:px-32">
        {/* header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#E6C76A]">
              Works
            </span>
          </h2>
          <p className="mt-4 text-white/70">
            Simple steps to drive premium in Georgia.
          </p>
        </div>

        {/* timeline */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* line */}
          <div className="lg:col-span-3 relative hidden lg:block">
            <div className="absolute left-3 top-0 h-full w-[2px] bg-[#D4AF37]/40" />
          </div>

          {/* steps */}
          <div className="lg:col-span-9 space-y-10">
            {steps.map((step, i) => (
              <div key={i} className="relative pl-10">
                {/* dot */}
                <span className="absolute left-0 top-2 h-4 w-4 rounded-full bg-[#D4AF37]" />

                <h3 className="text-xl font-extrabold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-white/70 max-w-xl">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex gap-3">
          <a
            href={whatsappUrl}
            className="
              rounded-2xl px-7 py-4
              font-extrabold text-base
              bg-[#D4AF37] text-black
              shadow-xl shadow-black/25
              hover:brightness-110 active:scale-[0.99] transition
            "
          >
            Book on WhatsApp
          </a>

          <a
            href="#cars"
            className="
              rounded-2xl px-7 py-4
              font-extrabold text-base
              bg-white/10 text-white
              border border-white/15
              hover:bg-white/15 active:scale-[0.99] transition
            "
          >
            View Cars
          </a>
        </div>
      </div>
    </section>
  );
}
