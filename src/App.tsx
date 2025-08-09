import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import News from './components/News';
import Contacts from './components/Contacts';
import { layoutContent } from './content/layoutContent';

const App = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <Hero />
				<News />
        <Products />
        <About />
        <Contacts />
      </main>
      <footer className="bg-foreground text-background py-8 text-center">
        <p>{layoutContent.footer.copyright}</p>
      </footer>
    </div>
  );
};

export default App;
