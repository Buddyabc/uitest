import "./gridA.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DownloadIcon from "@mui/icons-material/Download";
const GridA = () => {
  return (
    <>
      <div className="gridA">
        <div className="headings">
          <div className="one">MONTH </div>
          <div className="one">AG POWER FACTOR (%) </div>
          <div className="one">PF INCENTIVE/PF PENALITY </div>
        </div>
        <div className="line"></div>
        <div className="A">
          <div className="A1">Apr 2019</div>
          <div className="A1">173</div>
          <div className="A1">Penalty</div>
        </div>
        <div className="line"></div>
        <div className="A">
          <div className="A1">Aug 2019</div>
          <div className="A1">164</div>
          <div className="A1">Incentive</div>
        </div>
        <div className="line"></div>
        <div className="A">
          <div className="A1">Dec 2018</div>
          <div className="A1">175</div>
          <div className="A1">Incentive</div>
        </div>
        <div className="line"></div>
        <div className="A">
          <div className="A1">Dec 2019</div>
          <div className="A1">183</div>
          <div className="A1">Incentive</div>
        </div>
        <div className="line"></div>
        <div className="A">
          <div className="A1">Feb 2019</div>
          <div className="A1">177</div>
          <div className="A1">Incentive</div>
        </div>
        <div className="line"></div>
        <div className="A">
          <div className="A1">Jan 2019</div>
          <div className="A1">172</div>
          <div className="A1">Incentive</div>
        </div>
        <div className="line"></div>
        <div className="A">
          <div className="A1">Jul 2019</div>
          <div className="A1">194</div>
          <div className="A1">Penalty</div>
        </div>
        <div className="line"></div>
        <div className="A">
          <div className="A1">Jun 2019</div>
          <div className="A1">180</div>
          <div className="A1">Incentive</div>
        </div>
        <div className="line"></div>
        <div className="A">
          <div className="A1">Mar 2019</div>
          <div className="A1">190</div>
          <div className="A1">Incentive</div>
        </div>
        <div className="line"></div>
        <div className="A">
          <div className="A1">May 2019</div>
          <div className="A1">186</div>
          <div className="A1">Incentive</div>
        </div>
        <div className="line"></div>
        <div className="lowerSection">
          <div className="extra"></div>
          <div className="mainlower">
            <div className="lowerpara">Rows per page</div>
            <div className="lowerpara">1-10 of 13</div>
            <div className="lowerselect">
              <select className="selectSection">
                    <option value="0" className="name">10</option>
                    <option value="0">15</option>
                    <option value="0">20</option>
                    <option value="0">25</option>
                 </select>
            </div>
            <div className="pagination1">
            <a href="#" className="disabled"><ChevronLeftIcon /></a>
            <a href="#"><NavigateNextIcon /></a>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="download">
          <a href="#" style={{ textDecoration: "none" }}>
            <DownloadIcon />
            Export to Excel
          </a>
        </div>
      </div>
    </>
  );
};
export default GridA;
