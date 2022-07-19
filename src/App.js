import logo from './logo.svg';
import './App.css';
import {Footer} from './Components/Footer';
import {Landing} from './Components/Landing';
import {Navigation} from './Components/Navigation'

function App() {
  return (
   <div>
     <div>
      <Navigation/>
      <Landing/>
    </div>
    <div>
      <Footer/>
    </div>
   </div>
  );
}

export default App;
