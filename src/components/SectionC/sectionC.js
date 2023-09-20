import "./sectionC.css";
import TableChartIcon from '@mui/icons-material/TableChart';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ChartA from "../chart/chartA";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GridA from "../GridA/gridA";

const SectionC=()=>{
    return (
        <>
        <Router>
        <div className="SectionCA">
            <div className="innerSectionC">
              <div className="upperC">
                <div className="icons">
                    <div className="chartIcon"><Link to="/"><InsertChartIcon/></Link></div>
                    <div className="tableIcon"><Link to="/gridA"><TableChartIcon/></Link></div>
                </div>
                <div className="paraC">Period Dec 2018 To Nov 2019</div>
              </div>
         
              <Routes>
                  <Route exact path="/" element={<ChartA key="chartA"/>}></Route>
                  <Route exact path="/gridA" element={<GridA key="gridA"/>}></Route>
              </Routes>
            
            </div>
        </div>
        </Router>
        </>
    )
}
export default SectionC;