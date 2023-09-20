import './App.css';
import Navbar from './components/Navbar1/navbar1';
import SectionA from './components/SectionA/sectionA';
import SectionB from './components/SectionB/sectionB';
import SectionC from './components/SectionC/sectionC';
import Footer from './components/footer/footer';
import inputs from "./input.json";

function App() {
  console.log(inputs[4].SectionBC);
  return (
    <div className="App">
      <Navbar logo={inputs[0].navbar.logo.inner}  accountLink={inputs[0].navbar.account.link} notificationLink={inputs[0].navbar.notification.link} name={inputs[0].navbar.selectedName.name} gridLink={inputs[0].navbar.grid.link}/>
      <SectionA inner={inputs[1].SectionA.inner}/>
      <SectionB compare={inputs[2].SectionB.compare} seeWhyLink={inputs[2].SectionB.seeWhy.link} homePrice={inputs[2].SectionB.Homeprice} similarHomeprice={inputs[2].SectionB.SimilarHomeprice} electricBill={inputs[3].SectionBB.ElectricBill} range={inputs[3].SectionBB.range} LearnmoreLink={inputs[3].SectionBB.LearnMore.link} LocalJson={inputs[4].SectionBC}/>
      <SectionC/>
      <Footer/>
    </div>
  );
}

export default App;
