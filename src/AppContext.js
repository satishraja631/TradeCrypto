import { createContext,useState } from "react";

export const AppContext=createContext({
    coins:[],
    currency:null,
    coinId:null,
    coinData:[],
    days:null
})

const AppProvider=({children})=>{

    const [coins,setCoins]=useState([])
    const [currency,setCurrency]=useState('INR')
    const [coinId,setCoinId]=useState('bitcoin')
    const [coinData,setCoinData]=useState([])
    const [days,setDays]=useState(1)

    const values={coins,setCoins,currency,setCurrency,coinId,setCoinId,coinData,setCoinData,days,setDays}

    return(
       <AppContext.Provider value={values}>
          {children}
       </AppContext.Provider>
    )

}

export default AppProvider;