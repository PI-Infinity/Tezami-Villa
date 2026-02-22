"use client";
import React, { useEffect, useMemo, useState } from "react";
import { X, Check, Shield, Gauge, Users, Cog } from "lucide-react";

type Car = {
  id: string;
  name: string;
  pricePerDay: string;
  images: string[]; // paths in /public
  tags?: string[];
  short: string;
  specs: {
    category: string;
    transmission: string;
    seats: string;
    fuel: string;
    year?: string;
    engine?: string;
    drivetrain?: string;
  };
  included: string[];
  rules: string[];
};

function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (locked) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

function CarModal({
  open,
  car,
  onClose,
  whatsappNumber,
}: {
  open: boolean;
  car: Car | null;
  onClose: () => void;
  whatsappNumber: string;
}) {
  const [activeImg, setActiveImg] = useState(0);

  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) setActiveImg(0);
  }, [open, car?.id]);

  const whatsappUrl = useMemo(() => {
    if (!car) return "#";
    const text = `Hello, I want to rent "${car.name}" in Georgia. Please send availability, exact price, deposit, and delivery options.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, [car, whatsappNumber]);

  if (!open || !car) return null;

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true">
      {/* backdrop */}
      <button
        className="absolute inset-0 bg-black/75"
        onClick={onClose}
        aria-label="Close"
      />

      {/* panel */}
      <div className="absolute inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center p-3 sm:p-6">
        <div className="relative w-full md:max-w-5xl rounded-[2rem] border border-white/10 bg-[#0B0F1A] shadow-2xl shadow-black/40 overflow-hidden">
          {/* top bar */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="min-w-0">
              <div className="text-white font-extrabold text-lg sm:text-xl truncate">
                {car.name}
              </div>
              <div className="text-white/60 text-xs sm:text-sm">
                {car.pricePerDay} • Premium rental in Georgia
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white hover:bg-white/10 transition"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* left: gallery */}
            <div className="lg:col-span-7 p-5 sm:p-7">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/30">
                <img
                  src={car.images[activeImg]}
                  alt={car.name}
                  className="w-full h-[260px] sm:h-[360px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                {/* tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {(car.tags || []).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-bold text-white backdrop-blur-md"
                    >
                      <span className="text-[#D4AF37]">●</span> {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* thumbnails */}
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {car.images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setActiveImg(i)}
                    className={[
                      "shrink-0 rounded-2xl overflow-hidden border transition",
                      i === activeImg
                        ? "border-[#D4AF37]"
                        : "border-white/10 hover:border-white/20",
                    ].join(" ")}
                    aria-label={`Open image ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt={`${car.name} ${i + 1}`}
                      className="h-16 w-24 object-cover"
                    />
                  </button>
                ))}
              </div>

              <p className="mt-5 text-white/75 text-sm leading-relaxed">
                {car.short}
              </p>
            </div>

            {/* right: details */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-7">
              {/* price + CTA */}
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-white/70 text-xs">Starting from</div>
                    <div className="text-white font-extrabold text-2xl">
                      {car.pricePerDay}
                    </div>
                  </div>
                  <div className="text-[#D4AF37] text-xs font-bold">
                    ● Available on request
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  className="
                    mt-5 inline-flex w-full items-center justify-center
                    rounded-2xl px-5 py-4
                    font-extrabold text-base
                    bg-[#D4AF37] text-black
                    shadow-xl shadow-black/25
                    hover:brightness-110 active:scale-[0.99] transition
                  "
                >
                  Book on WhatsApp
                </a>

                <div className="mt-3 text-xs text-white/55">
                  Fast reply • Delivery available • Local support
                </div>
              </div>

              {/* specs */}
              <div className="mt-6">
                <div className="text-white font-extrabold">Specs</div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center gap-2 text-white/80 text-xs">
                      <Cog size={14} className="text-[#D4AF37]" />
                      Transmission
                    </div>
                    <div className="mt-1 text-white font-bold text-sm">
                      {car.specs.transmission}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center gap-2 text-white/80 text-xs">
                      <Users size={14} className="text-[#D4AF37]" />
                      Seats
                    </div>
                    <div className="mt-1 text-white font-bold text-sm">
                      {car.specs.seats}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center gap-2 text-white/80 text-xs">
                      <Gauge size={14} className="text-[#D4AF37]" />
                      Category
                    </div>
                    <div className="mt-1 text-white font-bold text-sm">
                      {car.specs.category}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center gap-2 text-white/80 text-xs">
                      <Shield size={14} className="text-[#D4AF37]" />
                      Fuel
                    </div>
                    <div className="mt-1 text-white font-bold text-sm">
                      {car.specs.fuel}
                    </div>
                  </div>
                </div>

                {/* extra specs (optional) */}
                <div className="mt-4 grid gap-2 text-sm text-white/70">
                  {car.specs.year && (
                    <div className="flex justify-between">
                      <span>Year</span>
                      <span className="text-white/85 font-semibold">
                        {car.specs.year}
                      </span>
                    </div>
                  )}
                  {car.specs.engine && (
                    <div className="flex justify-between">
                      <span>Engine</span>
                      <span className="text-white/85 font-semibold">
                        {car.specs.engine}
                      </span>
                    </div>
                  )}
                  {car.specs.drivetrain && (
                    <div className="flex justify-between">
                      <span>Drivetrain</span>
                      <span className="text-white/85 font-semibold">
                        {car.specs.drivetrain}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* included */}
              <div className="mt-7">
                <div className="text-white font-extrabold">Included</div>
                <div className="mt-3 grid gap-2">
                  {car.included.map((t) => (
                    <div
                      key={t}
                      className="flex items-start gap-2 text-sm text-white/75"
                    >
                      <Check size={16} className="mt-0.5 text-[#D4AF37]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* rules */}
              <div className="mt-7">
                <div className="text-white font-extrabold">Terms</div>
                <div className="mt-3 grid gap-2">
                  {car.rules.map((t) => (
                    <div key={t} className="text-sm text-white/70">
                      • {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* bottom close on mobile */}
              <button
                onClick={onClose}
                className="mt-7 w-full lg:hidden rounded-2xl px-5 py-4 font-bold text-base border border-white/15 bg-white/10 text-white hover:bg-white/15 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** ✅ Example: use this in your FeaturedCars section */
export function FeaturedCarsWithModal() {
  const whatsappNumber = "995577138372";

  const cars: Car[] = [
    {
      id: "4runner",
      name: "Toyota 4Runner TRD",
      pricePerDay: "From $120 / day",
      images: [
        "/cars/4runner-1.webp",
        "/cars/4runner-2.webp",
        "/cars/4runner-3.webp",
      ],
      tags: ["Premium SUV", "Best for Georgia"],
      short:
        "A premium SUV built for comfort and confidence. Perfect for city driving and trips around Georgia. Clean interior, strong presence, smooth ride.",
      specs: {
        category: "SUV",
        transmission: "Automatic",
        seats: "5 Seats",
        fuel: "Gasoline",
        year: "2022",
        engine: "4.0L",
        drivetrain: "4WD",
      },
      included: [
        "Clean & ready car",
        "Support in Georgia",
        "Delivery options available",
      ],
      rules: [
        "Deposit required",
        "Driver age 21+",
        "Valid license & ID required",
      ],
    },
    // დაამატე სხვა მანქანებიც იგივე ფორმატით
  ];

  const [selected, setSelected] = useState<Car | null>(null);

  return (
    <section id="cars" className="relative w-full bg-[#0B0F1A] py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#E6C76A]">
                Cars
              </span>
            </h2>
            <p className="mt-4 text-white/70">
              Tap any car to see details and book.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <button
              key={car.id}
              onClick={() => setSelected(car)}
              className="
                text-left rounded-3xl overflow-hidden
                border border-white/10 bg-white/5 backdrop-blur-xl
                hover:bg-white/10 transition shadow-2xl shadow-black/20
              "
            >
              <div className="relative h-56">
                <img
                  src={car.images[0]}
                  alt={car.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-extrabold text-lg">
                    {car.name}
                  </div>
                  <div className="text-white/75 text-sm mt-1">
                    {car.pricePerDay}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {car.tags?.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-sm text-white/70 line-clamp-2">
                  {car.short}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#D4AF37]">
                  View details →
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <CarModal
        open={!!selected}
        car={selected}
        onClose={() => setSelected(null)}
        whatsappNumber={whatsappNumber}
      />
    </section>
  );
}
