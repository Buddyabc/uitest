import "./gridA.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DownloadIcon from "@mui/icons-material/Download";
const GridA = ({gridData}) => {
  // console.log(gridData);
  return (
    <>
      <div className="gridA">
        <div className="headings">
          <div className="one">MONTH </div>
          <div className="one">AG POWER FACTOR (%) </div>
          <div className="one">PF INCENTIVE/PF PENALITY </div>
        </div>
        <div className="line"></div>
        { gridData && gridData.map((value)=>{
            return (
              <>
                 <div className="A" key={value.month}>
                 <div className="A1">{value.month}</div>
                 <div className="A1">{value.power}</div>
                 <div className="A1">{value.pf}</div>
                 </div>
                 <div className="line"></div>
              </>
            )
        })}
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
