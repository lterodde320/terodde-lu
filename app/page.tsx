import Hero from "./Sections/Hero";
import { Bento } from "./Sections/BentoGrid";
import CircularReveal from "./Components/CircularReveal";
import PageRenderer from "./Components/PageRenderer";
import { PageContextProvider } from "./Controllers/pageContext";
import Footer from "./Sections/Footer";

export default function Home() {


  return (
    <PageContextProvider>
      <div className="bg-gray-100 dark:bg-black transition-colors duration-300">
        <Hero />
        <Bento />
        <Footer />
        <CircularReveal>
          <PageRenderer />
        </CircularReveal>
      </div>
    </PageContextProvider>
  );
}
