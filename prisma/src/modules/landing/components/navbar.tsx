import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        padding: "20px 28px 0 28px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 18px",
          borderRadius: "24px",
          background: "rgba(255, 255, 255, 0.50)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          border: "1px solid rgba(255, 255, 255, 0.55)",
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            textDecoration: "none",
            color: "#111827",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 14,
              background: "rgba(255,255,255,0.65)",
              border: "1px solid rgba(255,255,255,0.7)",
              display: "grid",
              placeItems: "center",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src="/assets/logo-jaecoo.svg"
              alt="JAECOO Logo"
              style={{
                width: 28,
                height: 28,
                objectFit: "contain",
              }}
            />
          </div>

          <div style={{ lineHeight: 1.1 }}>
            <div
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              JAECOO
            </div>
            <div
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: 12,
                color: "#6B7280",
                marginTop: 2,
              }}
            >
              Service Management System
            </div>
          </div>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              padding: "10px 18px",
              borderRadius: 999,
              color: "#111827",
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              border: "1px solid rgba(17, 24, 39, 0.08)",
              background: "rgba(255,255,255,0.38)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          >
            Masuk
          </Link>

          <Link
            to="/login"
            style={{
              textDecoration: "none",
              padding: "10px 18px",
              borderRadius: 999,
              color: "#FFFFFF",
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: 14,
              fontWeight: 600,
              background:
                "linear-gradient(135deg, rgba(94,126,220,1) 0%, rgba(76,110,214,1) 100%)",
              boxShadow: "0 10px 20px rgba(76, 110, 214, 0.25)",
            }}
          >
            Login Sistem
          </Link>
        </nav>
      </div>
    </header>
  );
}