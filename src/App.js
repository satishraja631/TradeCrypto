import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import AppProvider from './AppContext.js'
import Footer from './Components/Footer.js';


function App() {
  return (
    <AppProvider>
    <div className='App'>
      <Navbar/>
      <Home/>
      <Footer/>
      
      
    </div>
    </AppProvider>
  );
}

export default App;