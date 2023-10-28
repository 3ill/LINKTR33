import Profile from './components/Profile';
import { Hero, About, LetsConnect, Footer } from './sections';

const App = () => {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <Profile />
      </section>
      <section className="padding-x py-[100px] max-sm:pt-[60px]">
        <About />
      </section>
      <section className="padding-x">
        <LetsConnect />
      </section>
      <section className=" mt-[60px]">
        <Footer />
      </section>
    </main>
  );
};

export default App;
