"use client";

import { useState } from "react";

const images = [
  "/tezami-hero.jpeg",
  "/tezami-hero.jpeg",
  "/tezami-hero.jpeg",
  "/tezami-hero.jpeg",
  "/tezami-hero.jpeg",
];

export default function MiniCarousel() {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const openModal = (i: number) => {
    setModalIndex(i);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const modalNext = () => setModalIndex((prev) => (prev + 1) % images.length);
  const modalPrev = () =>
    setModalIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <>
      <style>{`
        .gallery {
          background: #0F1110;
          padding: 120px 0;
          color: #EAE3D2;
          text-align: center;
        }

        .title {
          font-family: 'DM Serif Display', serif;
          font-size: 2.8rem;
          margin-bottom: 60px;
        }

        .carousel-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel {
          display: flex;
          gap: 20px;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .item {
          min-width: 320px;
          height: 220px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.5s ease, opacity 0.5s ease, box-shadow 0.5s ease;
          opacity: 0.7;
          flex-shrink: 0;
        }

        .item.active {
          transform: scale(1.1);
          opacity: 1;
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
        }

        .item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .item:hover img {
          transform: scale(1.12);
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 2.5rem;
          color: rgba(234,227,210,0.6);
          cursor: pointer;
          transition: color 0.3s ease;
          z-index: 2;
          user-select: none;
        }

        .arrow:hover {
          color: #EAE3D2;
        }

        .arrow.left { left: 15px; }
        .arrow.right { right: 15px; }

        /* Modal */
        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.95);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 5000;
        }

        .modal img {
          max-width: 90%;
          max-height: 80vh;
          border-radius: 12px;
          margin-bottom: 40px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        .modal-controls {
          position: absolute;
          top: 50%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 40px;
          font-size: 2.5rem;
          color: #fff;
          user-select: none;
        }

        .close {
          position: absolute;
          top: 30px;
          right: 50px;
          font-size: 2rem;
          cursor: pointer;
          color: #fff;
        }

        .thumbnails {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding: 0 40px 20px;
        }

        .thumb {
          width: 100px;
          height: 65px;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0.5;
          transition: 0.3s ease, transform 0.3s ease;
          flex-shrink: 0;
        }

        .thumb.active {
          opacity: 1;
          transform: scale(1.1);
        }

        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <section className="gallery" id="gallery">
        <h2 className="title">Gallery</h2>
        <div className="carousel-container">
          <div className="arrow left" onClick={prev}>
            ‹
          </div>
          <div
            className="carousel"
            style={{ transform: `translateX(-${index * 340}px)` }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className={`item ${i === index ? "active" : ""}`}
                onClick={() => openModal(i)}
              >
                <img src={src} alt="Tezami Villa" />
              </div>
            ))}
          </div>
          <div className="arrow right" onClick={next}>
            ›
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="modal">
          <div className="close" onClick={closeModal}>
            ✕
          </div>
          <div className="modal-controls">
            <span onClick={modalPrev}>‹</span>
            <span onClick={modalNext}>›</span>
          </div>
          <img src={images[modalIndex]} alt="Preview" />
          <div className="thumbnails">
            {images.map((src, i) => (
              <div
                key={i}
                className={`thumb ${i === modalIndex ? "active" : ""}`}
                onClick={() => setModalIndex(i)}
              >
                <img src={src} alt={`Thumbnail ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
