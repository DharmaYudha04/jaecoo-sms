import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";

export default function LandingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(124,155,255,0.18) 0%, rgba(255,255,255,0) 28%), radial-gradient(circle at top right, rgba(203,213,225,0.28) 0%, rgba(255,255,255,0) 30%), linear-gradient(180deg, #F7F7F8 0%, #ECEEF1 100%)",
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  );
}