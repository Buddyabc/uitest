import {useState} from 'react';
import "./chartA.css";
import DownloadIcon from "@mui/icons-material/Download";
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement,Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement,Legend, 
  CategoryScale, LinearScale, PointElement, Filler
)

function ChartA() {

  const [data, setData]= useState({
    data:{
    labels:["Dec2018","Jan2019","Feb2019", "Mar2019", "Apr2019", "May2019", "Jun2019", "Jul2019", "Aug2019", "Sep2019", "Oct2019", "Nov2019", "Dec2019"],
   
    datasets:[
      { 
        // label: "none",
        data:[186, 184, 182, 183, 187, 185,183,184,181,182,184,183,192],
        backgroundColor:'aqua',
        borderColor:'blue',
        tension:0.4,
        fill:true,
        pointStyle:'circle',
        pointBorderColor:'blue',
        pointBackgroundColor:'blue',
        showLine:true,
      }
    ],
  },
  options:{
    scales:{
      x:{
        grid:{
          display: false,
        },
        ticks: {
          font: {
              size: "8rem",
          }
      }
      },
      y:{
        display: true,
        title:{
          display: true,
          text:"Power Factor",
          color:"black"
        },
        min:180,
        max:195,
        ticks:{
          stepSize:3
        }
      }
    },
    plugins:{
      legend:{
        display : false
      }
    }
  } 
  })
  return (
    <div className="ChartAA">
      <Line data={data.data} options={data.options}>Hello</Line>
      <div className="line"></div>
        <div className="download">
          <a href="#" style={{ textDecoration: "none" }}>
            <DownloadIcon />
            Export to Excel
          </a>
        </div>
    </div>
  );
}

export default ChartA;