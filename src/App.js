import './App.css';
import Navbar from './components/Navbar1/navbar1';
import SectionA from './components/SectionA/sectionA';
import SectionB from './components/SectionB/sectionB';
import SectionC from './components/SectionC/sectionC';
import Footer from './components/footer/footer';
import inputs from "./input.json";

function App() {
  // console.log(inputs[4].SectionBC);
  // console.log(inputs[7].chartPart.Xaxis);
  return (
    <div className="App">
      <Navbar navbarData={inputs[0].navbar} />
      <SectionA inner={inputs[1].SectionA}/>
      <SectionB partA={inputs[2].SectionB} partB={inputs[3].SectionBB} partC={inputs[4].SectionBC}/>
      <SectionC sectionC={inputs[5].SectionC} gridData={inputs[6].gridPart} chartData={inputs[7].chartPart}/>
      <Footer/>
    </div>
  );
}

export default App;
