export default function Footer() {
  return (
    <footer
      id="tentang"
      style={{
        padding: '0 28px 32px 28px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          borderRadius: 30,
          padding: '24px 26px',
          background: 'rgba(255,255,255,0.45)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          border: '1px solid rgba(255,255,255,0.62)',
          boxShadow: "0 20px 50px rgba(15, 23, 42, 0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: 640 }}>
          <div
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: 18,
              fontWeight: 700,
              color: "#111827",
              letterSpacing: "-0.03em",
              marginBottom: 10,
            }}
          >
            JAECOO Service Management System
          </div>

          <p
            style={{
              margin: 0,
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: 15,
              lineHeight: 1.7,
              color: "#4B5563",
            }}
          >
            Sistem ini dirancang untuk membantu proses operasional servis
            kendaraan menjadi lebih tertata, mudah dipantau, dan nyaman
            digunakan oleh tim frontline, mekanik, manajer, maupun admin.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 14,
              background: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(255,255,255,0.75)",
              display: "grid",
              placeItems: "center",
              overflow: "hidden",
            }}
          >
            <img
              src="/assets/logo-jaecoo.svg"
              alt="JAECOO Logo"
              style={{ width: 28, height: 28, objectFit: "contain" }}
            />
          </div>

          <div
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: 14,
              color: "#6B7280",
            }}
          >
            © 2026 JAECOO Yogyakarta
          </div>
        </div>
      </div>
    </footer>
  );
}
