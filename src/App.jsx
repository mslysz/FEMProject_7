import './styles.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <main className='container'>
      <Header isVisible={isVisible} setIsVisible={setIsVisible} />
      <Hero />
      <About />
      <Modal isVisible={isVisible} />
    </main>
  );
}

export default App;
