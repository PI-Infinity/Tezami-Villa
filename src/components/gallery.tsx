"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../app/tezami-gallery.css";

const images = [
  "/14.webp",
  // "/0.1.webp",
  "/1.0.webp",
  "/1.5.webp",
  "/4.0.webp",
  "/3.3.webp",
  "/3.6.webp",
  "/4.2.webp",
  "/5.webp",
  "/2.0.webp",
  "/6.webp",
  // "/7.webp",
  "/8.webp",
  // "/9.webp",
  // "/10.webp",
  "/11.webp",
  // "/12.webp",
  "/13.webp",
];

export default function ModernGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <section className="tez-gallery" id="gallery">
        <div className="tez-gallery__container">
          <h2 className="tez-gallery__title">Gallery</h2>

          <div className="tez-gallery__grid">
            {images.map((src, i) => (
              <div
                key={i}
                className={`tez-gallery__item ${
                  i === 0 ? "tez-gallery__item--large" : ""
                }`}
                onClick={() => setIndex(i)}
              >
                <img src={src} alt="Tezami Villa" />
                <div className="tez-gallery__overlay">
                  <span>View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images.map((src) => ({ src }))}
        index={index}
      />
    </>
  );
}
