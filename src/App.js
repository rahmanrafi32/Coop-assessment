import './app.css';
import Footer from './components/Footer/Footer';
import MainHome from './components/Home/MainHome/MainHome';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainHome/>
      <Footer/>
    </div>
  );
}

export default App;
