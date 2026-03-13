import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        padding: "40px 28px 80px 28px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          minHeight: "calc(100vh - 160px)",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            borderRadius: 36,
            padding: "44px 40px",
            background: "rgba(255,255,255,0.44)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.65)",
            boxShadow: "0 30px 60px rgba(15, 23, 42, 0.10)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(255,255,255,0.65)",
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: 13,
                color: "#4B5563",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "999px",
                  background: "#7C9BFF",
                  display: "inline-block",
                }}
              />
              Internal workshop platform
            </div>

            <h1
              style={{
                margin: "24px 0 16px 0",
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: "clamp(44px, 7vw, 88px)",
                lineHeight: 0.95,
                letterSpacing: "-0.06em",
                fontWeight: 700,
                color: "#111827",
                maxWidth: 720,
              }}
            >
              Service
              <br />
              Management
              <br />
              System
            </h1>

            <p
              style={{
                margin: 0,
                maxWidth: 620,
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: 18,
                lineHeight: 1.7,
                color: "#4B5563",
              }}
            >
              Platform internal untuk mengelola alur servis kendaraan secara
              lebih rapi, modern, dan nyaman digunakan oleh seluruh tim
              operasional.
            </p>
          </div>

          <div
            style={{
              marginTop: 36,
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              alignItems: "center",
            }}
          >
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                padding: "14px 24px",
                borderRadius: 999,
                color: "#FFFFFF",
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: 15,
                fontWeight: 600,
                background:
                  "linear-gradient(135deg, rgba(94,126,220,1) 0%, rgba(76,110,214,1) 100%)",
                boxShadow: "0 12px 24px rgba(76, 110, 214, 0.25)",
              }}
            >
              Masuk ke Sistem
            </Link>

            <a
              href="#tentang"
              style={{
                textDecoration: "none",
                padding: "14px 22px",
                borderRadius: 999,
                color: "#111827",
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: 15,
                fontWeight: 500,
                background: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(17, 24, 39, 0.08)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
              }}
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            borderRadius: 36,
            overflow: "hidden",
            minHeight: 540,
            background:
              "linear-gradient(180deg, rgba(244,244,245,0.72) 0%, rgba(229,231,235,0.52) 100%)",
            border: "1px solid rgba(255,255,255,0.65)",
            boxShadow: "0 30px 60px rgba(15, 23, 42, 0.10)",
          }}
        >
          <img
            src="/assets/landing-hero.jpg"
            alt="Workshop JAECOO"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.48) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: 26,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                alignSelf: "flex-end",
                display: "flex",
                gap: 10,
                alignItems: "center",
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.42)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.6)",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.8)",
                  display: "grid",
                  placeItems: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/assets/logo-jaecoo.svg"
                  alt="JAECOO"
                  style={{ width: 22, height: 22, objectFit: "contain" }}
                />
              </div>

              <div
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: 13,
                  color: "#374151",
                  lineHeight: 1.2,
                }}
              >
                <div style={{ fontWeight: 700 }}>JAECOO</div>
                <div style={{ color: "#6B7280" }}>Yogyakarta</div>
              </div>
            </div>

            <div
              style={{
                maxWidth: 320,
                padding: 18,
                borderRadius: 24,
                background: "rgba(255,255,255,0.42)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.62)",
                boxShadow: "0 12px 30px rgba(17, 24, 39, 0.08)",
              }}
            >
              <div
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: 13,
                  color: "#6B7280",
                  marginBottom: 8,
                }}
              >
                Design direction
              </div>
              <div
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: 19,
                  lineHeight: 1.35,
                  color: "#111827",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                }}
              >
                Premium, calm, and accessible interface for all workshop roles.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}