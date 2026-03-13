import HeroSection from "../components/hero-section"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function LandingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}