import React ,{useContext,useEffect,useState}from 'react'
import { AppContext } from '../AppContext';
import '../Styles/Info.css'

function Info() {
    const timeFrames=['1D','1W','1M','1Y'];
    const {coins,coinId,coinData,currency,setDays,days}=useContext(AppContext)
    

    const handleDays=async(timeFrame)=>{
        if(timeFrame==='1D'){
            setDays(1);
            console.log('This is daily block')
        
        }
        if (timeFrame==='1W'){
            setDays(7);
            console.log('This is weekly block')
        }
        if(timeFrame==='1M'){
            setDays(30);
            console.log('This is monthly block')
        }
        if(timeFrame==='1Y'){
            setDays(365);
            console.log('This is yearly block')
        }

        console.log(days)
    }

   
    
   
    
   
  return (
    <div className='chart-info'>
           
            {coinData.length>0 &&(
              <div className='coin-info'>
                   <p className='coin-info-currency'>{coinData[0].symbol.toUpperCase()}/{currency}</p>
                   <p className='coin-info-id'>{coinData[0].id.charAt(0).toUpperCase()+coinData[0].id.slice(1)}</p>
                   <p className='coin-info-price' >LAST PRICE:<b>{coinData[0].current_price}</b></p>
              </div>
            )}
            
           
           <div className='additional-info'>
           <ul className='frames'>
            {timeFrames.map((timeFrame)=>(
          
              <li key={timeFrame} className='timeFrame' onClick={()=>handleDays(timeFrame)}><h5>{timeFrame}</h5></li>
            ))}
           </ul>
           {coinData.length>0&&(
            <div className='volumes'>
            <p>VOLUME:<b>{coinData[0].total_volume}</b></p>
            <p>LOW:<b>{coinData[0].low_24h}</b></p>
            <p>HIGH:<b>{coinData[0].high_24h}</b></p>
            </div>
           )}
           </div>
           
                
    </div>
  )
}

export default Info