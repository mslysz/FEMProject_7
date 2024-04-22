import './styles.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './About';

function App() {
  return (
    <main className='container'>
      <Header />
      <Hero />
      <About />
    </main>
  );
}

export default App;
