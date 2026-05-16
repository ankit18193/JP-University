import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Leadership from '@/components/Leadership';
import Programs from '@/components/Programs';
import WhyChoose from '@/components/WhyChoose';
import Faculty from '@/components/Faculty';
import Alumni from '@/components/Alumni';
import Events from '@/components/Events';
import EnquirySection from '@/components/EnquirySection';
import News from '@/components/News';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Leadership />
      <Stats />
      <Programs />
      <WhyChoose />
      <Faculty />
      <Alumni />
      <EnquirySection />
      <Events />
      <News />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
