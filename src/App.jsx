import { CustumerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const App = () => (

  <main className="relative">
    
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b" data-aos="fade-right">
      <Hero />
    </section>
    <section className="padding" data-aos="fade-left">
      <PopularProducts />
    </section>
    <section className="padding" data-aos="fade-up">
      <SuperQuality />
    </section>
    <section className="padding-x py-10" data-aos="fade-left">
      <Services/>
    </section>
    <section className="padding" data-aos="fade-right">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue" data-aos="fade-up">
      <CustumerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full" data-aos="fade-right">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;