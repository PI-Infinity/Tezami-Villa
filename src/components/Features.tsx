"use client";

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@300;400&display=swap');

        .about {
          background: #0F1110;
          color: #EAE3D2;
          padding: 140px 0;
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 70px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }

        .about img {
          width: 100%;
          height: 600px;
          object-fit: cover;
          border-radius: 6px;
        }

        .about-small {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          opacity: 0.6;
          margin-bottom: 20px;
        }

        .about-title {
          font-family: 'DM Serif Display', serif;
          font-size: 3rem;
          margin-bottom: 30px;
          line-height: 1.2;
        }

        .about-text {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          line-height: 1.8;
          opacity: 0.85;
          margin-bottom: 40px;
        }

        .features {
          display: flex;
          gap: 40px;
        }

        .feature {
          font-size: 0.8rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          opacity: 0.7;
        }

        .divider {
          width: 60px;
          height: 1px;
          background: rgba(234,227,210,0.4);
          margin: 25px 0;
        }

        @media(max-width: 1100px){
          .about-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .about img {
            height: 450px;
          }
        }
      `}</style>

      <section className="about" id="about">
        <div className="about-container">
          {/* Image */}
          <img src="/tezami-about.jpg" alt="Tezami Villa" />

          {/* Text */}
          <div>
            <div className="about-small">About Tezami</div>

            <h2 className="about-title">
              A Private Escape
              <br />
              Between Forest and River
            </h2>

            <div className="divider"></div>

            <p className="about-text">
              Tezami is a two-storey private villa nestled in the natural
              landscape of Tsavkisi. Surrounded by forest, flowing river and
              mountain views, it offers complete privacy and refined comfort.
              Designed for slow mornings, quiet evenings and unforgettable
              gatherings.
            </p>

            <div className="features">
              <div className="feature">Private Pool</div>
              <div className="feature">2 Floors</div>
              <div className="feature">Mountain Views</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
