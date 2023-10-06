import './App.css';
import Header from './components/Header.js';
import DatingCards from './components/DatingCards.js';
import SwipeButtons from './components/SwipeButtons.js';

function App() {
  return (
    <div className='app'>
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
