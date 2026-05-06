import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Geography from "./sections/Geography";
import Video from "./sections/Video";
import Benefits from "./sections/Benefits";
import Reviews from "./sections/Reviews";
import Gallery from "./sections/Gallery";
import Process from "./sections/Process";
import School from "./sections/School";
import Booking from "./sections/Booking";
import Contacts from "./sections/Contacts";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Geography />
        <Video />
        <Benefits />
        <Reviews />
        <Gallery />
        <Process />
        <School />
        <Booking />
        <Contacts />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
