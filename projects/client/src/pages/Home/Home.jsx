import {
  Hero,
  Navbar,
  Analytics,
  Cards,
  Newsletter,
  Footer,
} from "../../components/Layouts";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main className="text-white">
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
      </main>
      <Footer />
    </>
  );
};
