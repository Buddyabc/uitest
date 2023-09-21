import {useState} from 'react';
import "./chartA.css";
import DownloadIcon from "@mui/icons-material/Download";
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement,Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement,Legend, 
  CategoryScale, LinearScale, PointElement, Filler
)

function ChartA(props) {
 
  // console.log(props.chartData.min);
  const [data, setData]= useState({
    data:{
    labels: (props.chartData.Xaxis),
   
    datasets:[
      { 
        // label: "none",
        data:(props.chartData.yaxis),
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
        min: (props.chartData.min),
        max:(props.chartData.max),
        ticks:{
          stepSize:(props.chartData.stepsize)
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
//  console.log(props.chartData.Xaxis);
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