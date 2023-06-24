import './App.css';
import Header from './componenets/Header';
import Stock from './componenets/Stock';
import Mainpage from './componenets/mainpage';
import Footer from './componenets/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Stock/>
      <Mainpage/>
      <Footer/>
    </div>
  );
}

export default App;
