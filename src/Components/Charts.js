import React ,{useState,useEffect,useRef,useContext} from 'react'
import axios from 'axios'
import Chart from "react-apexcharts";
import { format } from 'd3-format';
import { AppContext } from '../AppContext';
import '../Styles/Charts.css'
import Info from './Info';

function Charts() {
    const [chartData,setChartData]=useState([])
    const chartRef = useRef(null); 
    
    const {coinId,currency,coins,days}=useContext(AppContext)
    // const filteredCoin=coins.filter((coin)=>coin.id=coinId);
    


    useEffect(()=>{
        const fetchData=async(coinId)=>{
            const url=`https://api.coingecko.com/api/v3/coins/${coinId}/ohlc?days=${days}&vs_currency=${currency}&x_cg_demo_api_key=CG-of4Jrjn5zRvzsxzXYNbUGHmZ`
            
            axios.get(url)
            .then((response)=>{
              setChartData(response.data)
              
            })
            .catch((err)=>{
              console.log(err)
            } )
        }
        fetchData(coinId);
        

    },[coinId,currency,days])

    

    

    const options= {
        chart: {
          id: "candlestick",
          background:'#fff',
          width:'auto',
          
        },
        xaxis: {
          type:'datetime'
        },
        yaxis: {
         labels: {
          
          
          style:{
          fontSize:'9px'
         }
         },
         
        },
        scales: {
          x: {
          type: 'time',
          // Enable scrolling for X-axis:
          panning: true,
            // Adjust zoom behavior (optional):
            minZoom: 0.5,
            maxZoom: 5,
          },
         
          
    }
      }
      const series= [
        {
          name: "series-1",
          data: chartData
        }
      ]

      const handleZoomEnd = (context, { zoom, pan }) => {
    
    

   
    if (chartRef.current && zoom !== 1) {
      
      

     
      chartRef.current.zoomX(zoom * 0.95); 
    }
  };
    
  return (
    <div>
      <Info/>
      
    <div className='chart'>
        
        <div>
        <Chart
              options={options}
              series={series}
              type="candlestick"
              
              events={{
          zoomEnd: handleZoomEnd, // Handle zoom end event
        }}
          ref={chartRef}
        />

        </div>
    </div>
    </div>
    
  )
}

export default Charts