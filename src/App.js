import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingpage.css"
import Intro from './components/Intro';
import Ongoing from './components/Ongoing';
import End from './components/End';

function App() {
  return (
    <div>
      {/* INTRO */}
      <div className='myBG'>
        <NavigationBar />
        <Intro/>
      </div>
      {/* INTRO END */}

      {/* ONGOING */}
      <div className='ongoing'>
        <Ongoing/>
      </div>
      {/* ONGOING END */}

      {/* END */}
    <div className='end'>
      <End/>
    </div>
      {/* END */}
    </div>
      
  )
}

export default App;
