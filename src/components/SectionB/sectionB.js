import "./sectionB.css";
import House3 from "./house3.jpg";

const SectionB = (props,{Localjson}) => {
  return (
    <>
      <div className="sectionB">
        <div className="container1">
          <div className="heading">
            HERE'S A SUMMARY OF INSIGHTS ABOUT YOUR USAGE
          </div>
          <div className="partA">
            <div className="sideone">
              <div className="sideoneheading">
                ELECTIC USAGE COMPARE TO OTHERS
              </div>
              <div className="sideonepara">
                Your usage is {props.compare} than Similar homes around your area keep
                doing your things!
              </div>
              <div className="sideoneancher">
                <a href={props.seeWhyLink} target="main" style={{ textDecoration: "none" }}>
                  See why this is happening
                </a>
              </div>
            </div>
            <div className="sidetwo">
              <div className="bars">
                <div className="barone-bar"></div>
                <div className="bartwo-bar"></div>
              </div>
              <hr />
              <div className="barsprice">
                <div className="barone-price">{props.homePrice}</div>
                <div className="bartwo-price">{props.similarHomeprice}</div>
              </div>
              <div className="barsAddress">
                <div className="barone-address">Home</div>
                <div className="bartwo-address">Similar Home</div>
              </div>
            </div>
          </div>
          <div className="partA">
            <div className="sideone">
              <div className="sideoneheading">PROJECTED ELECTRIC BILL</div>
              <div className="sideonepara">
                You are currently at <b>{props.electricBill}</b> of your electric bill forecast.Your
                projected next bill is going to be around <b>{props.range}</b>
              </div>
              <div className="sideoneancher">
                <a href={props.LearnmoreLink} target="main" style={{ textDecoration: "none" }}>
                  Learn More
                </a>
              </div>
            </div>
          <div className="electricbill">
            <div className="electricbillhead">ELECTRIC BILL</div>
            <div className="bill">{props.electricBill}.00</div>
          </div>
          </div>
        </div>
        <div className="container2">
            <div className="c-partA">
                <div className="c-partA1">
                    <div className="c-partA11">YOUR HOME</div>
                    <div className="c-partA12">Account : 411003876454</div>
                </div>
                <div className="c-partB">
                <img src={House3} style={{width:"5vw",height:"9vh"}} className="container2-img"/>
                </div>
            </div>
            <div className="raws">
                    <div className="raw1">
                        <div className="name">Electric Meter</div>
                        <div className="data">611003876454</div>
                    </div>
                    <div className="line"></div>
                    <div className="raw1">
                        <div className="name">Water Meter</div>
                        <div className="data">911343676454</div>
                    </div>
                    <div className="line"></div>
                    <div className="raw1">
                        <div className="name">Solar</div>
                        <div className="data">LG Solar | 8 Panels</div>
                    </div>
                    <div className="line"></div>
                    <div className="raw1">
                        <div className="name">Water</div>
                        <div className="data">911343676454</div>
                    </div>
                    <div className="line"></div>
                    <div className="raw1">
                        <div className="name">Battery</div>
                        <div className="data">SunPower | Li-ion</div>
                    </div>
                </div>
        </div>
      </div>
    </>
  );
};

export default SectionB;
