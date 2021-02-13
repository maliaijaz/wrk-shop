import merch from './merch.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={merch} className="App-logo" alt="WRKINSILENCE Long-Sleeve Tee" />
        <p className="Wrk-merch-title">
         WRKINSILENCE MERCH
        </p>
        <a
          className="App-link"
          href="https://wrkinsilence.bigcartel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop Now
        </a>
      </header>
    </div>
  );
}

export default App;
