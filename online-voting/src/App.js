import logo from './logo.svg';
import './css/styles.css';
import Login from './Login';
import Navbar from './components/navbar';
import LandingPage from './landingpage';

function App() {
  return (
    <div className="App">

      {/* THIS IS LOGIN PAGE COMPONENT */}
      <Login />
      
      {/* <LandingPage/> */}
    </div>
  );
}

export default App;
