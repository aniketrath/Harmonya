import logo from './logo.svg';
import './App.css';
import {Footer} from './Components/Footer';
import {Landing} from './Components/Landing';
import {Navigation} from './Components/Navigation'
import {FirstDiv} from './Components/FirstDiv'
import {SecondDiv} from './Components/SecondDiv'
import {ThirdDiv} from './Components/ThirdDiv'
import {ApplicationCards} from './Components/ApplicationCards'

function App() {
  return (
   <div>
     <div>
      <Navigation/>
      <Landing/>
    </div>
    <FirstDiv/>
    <SecondDiv/>
    <ThirdDiv/>
    <ApplicationCards/>
    <div>
      <Footer/>
    </div>
   </div>
  );
}

export default App;
