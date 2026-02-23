"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../app/tezami-gallery.css";

const images = [
  "/tezami-hero.jpeg",
  "/tezami-hero.jpeg",
  "/tezami-hero.jpeg",
  "/tezami-hero.jpeg",
  "/tezami-hero.jpeg",
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
