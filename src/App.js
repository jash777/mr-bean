import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Tokonomics from './Components/Tokonomics';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <About />
      <Tokonomics />
    </div>
  );
}

export default App;
