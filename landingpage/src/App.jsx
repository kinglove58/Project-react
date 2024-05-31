import {
  Nav,
  Subscribe,
  Footer,
  Hero,
  CustomerReview,
  PopularProduct,
  SuperQuality,
  Services,
  SpecialOffer,
  QualityProduct,
} from "./section";


function App() {
  return (
    <main className="relative">
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <QualityProduct />
      </section>
      <section>
        <SuperQuality />    
      </section>
      <section>
        <Services />
      </section>
      <section>
        <PopularProduct />
      </section>
      <section>
        <SpecialOffer />
      </section>
      <section>
        <CustomerReview />
      </section>
      <section>
        <Subscribe />
      </section>
      <section>
        <Footer />
      </section>
          </main>
  );
}

export default App;
