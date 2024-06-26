import React, { useEffect, useState,useContext } from 'react'
import '../Styles/Assets.css'
import axios from 'axios'
import { AppContext } from '../AppContext'

function Assets() {
    const currencies=['INR','USD','JPY','BTC']
   
    const API_KEY='CG-of4Jrjn5zRvzsxzXYNbUGHmZ'
    
    const [hasFetchedData,setHasFetchedData]=useState(false)
     const {coins,setCoins,currency,setCurrency,setCoinId,setCoinData,coinId,coinData}=useContext(AppContext);


    useEffect(()=>{
    const fetchData=async(currency)=>{
       
        
        const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&x_cg_demo_api_key=${API_KEY}`
      
       
           axios.get(url)
           .then((response)=>{
              setCoins(response.data)
              
              setHasFetchedData(true)
              
              
           })
           .catch((err)=>{
            
             console.log(err)
           })
           
           
        
        
     
    }

    fetchData(currency)
    if(!hasFetchedData){
        fetchData(currency)
    }
    const intervalId = setInterval(() => {
      fetchData(currency);
    }, 60000);
     return () => clearInterval(intervalId)
     },[currency])

     const handleClick=async(currency)=>{
       setCurrency(currency)
       
       
        
     }

     

     const updateCoidId=async(coinId)=>{
      setCoinId(coinId)
     }

      useEffect(()=>{

        const timeoutId = setTimeout(() => {
            const filteredCoin=coins.filter((coin)=>coin.id===coinId)
            setCoinData(filteredCoin)
            
           return () => clearTimeout(timeoutId); 
           }, 5000)
             

        const updateCoin=async()=>{
            const filteredCoin=coins.filter((coin)=>coin.id===coinId)
            setCoinData(filteredCoin)
            
        }

        updateCoin();

        return () => clearTimeout(timeoutId);

        
       
     },[coinId,coins])


      
      
      
     


  return (
    <div className='assets'>
    <div className='search-bar'>
     <input  placeholder="&#xF002;Search" ></input>
    </div>
    <div className='coins'>
        
        <ul className='currencies-list'>
         {currencies.map((currency)=>(
            <li className='currencies'  onClick={()=>handleClick(currency)} ><h5>{currency}</h5></li>
         ))}
        </ul>
        <ul className='coins-list'>
            {
                coins.map((coin)=>(
                    <li key={coin.id} className='coin-items' onClick={()=>updateCoidId(coin.id)}>
                        <img src={coin.image} alt={coin.symbol} className='coin-image'></img>
                        <div className='coin-details'>
                            <p>{coin.symbol.toUpperCase()}/{currency}</p>
                            <p>{coin.price_change_percentage_24h}</p>
                        </div>
                        <p className='coin-price'>{coin.current_price}</p>
                    </li>
                ))
            }
        </ul>
       
        
    </div>
    

    </div>
  )
}

export default Assets