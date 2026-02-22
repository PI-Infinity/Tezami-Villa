import React, { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Is a deposit required?",
      a: "Yes, a refundable deposit is required. The amount depends on the car model.",
    },
    {
      q: "Is insurance included?",
      a: "Basic insurance is included. Full insurance options are available on request.",
    },
    {
      q: "What is the minimum driver age?",
      a: "The minimum driver age is usually 21 years, depending on the vehicle.",
    },
    {
      q: "Do you offer airport delivery?",
      a: "Yes, we provide delivery to Airports and anywhere in the country.",
    },
    {
      q: "How can I pay?",
      a: "You can pay by cash or card. Payment details are confirmed on booking.",
    },
    {
      q: "What documents are required?",
      a: "A valid driving license and passport or ID are required.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative w-full bg-[#080808] py-20 sm:py-28 px-4"
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(45%_45%_at_50%_20%,rgba(212,175,55,0.10),transparent_60%)]" />

      <div className="relative mx-auto sm:px-32">
        {/* header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#E6C76A]">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-white/70">
            Everything you need to know before booking.
          </p>
        </div>

        {/* accordion */}
        <div className="mt-12 space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  rounded-2xl border border-white/10
                  bg-white/5 backdrop-blur-xl
                  overflow-hidden
                "
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="
                    w-full flex items-center justify-between
                    px-6 py-5
                    text-left
                    text-white font-semibold
                    hover:bg-white/10 transition
                  "
                >
                  <span>{item.q}</span>
                  <span
                    className={`text-[#D4AF37] transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-white/75 text-sm leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* note */}
        <p className="mt-6 text-center text-xs text-white/55">
          Still have questions? Message us on WhatsApp for quick answers.
        </p>
      </div>
    </section>
  );
}
