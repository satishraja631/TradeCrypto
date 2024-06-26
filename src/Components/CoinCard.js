import React ,{useContext} from 'react'
import { AppContext } from '../AppContext'
import '../Styles/CoinCard.css'

function CoinCard() {
    const {coinData}=useContext(AppContext)
  return (
    <div>
    <div className='coin-card'>

        {coinData.length>0 &&(
           <div>
            <img src={coinData[0].image} alt='coin image' className='coin-card-image'></img>
            <div className='coin-card-elements'> 
                 <p className='name'>Symbol :</p>
                 <p className='value'>{coinData[0].symbol.toUpperCase()}</p>
            </div>
            <div className='coin-card-elements'> 
                 <p className='name'>Coin ID :</p>
                 <p className='value'>{coinData[0].id.toUpperCase()}</p>
            </div>
            <div className='coin-card-elements'> 
                 <p className='name'>Last Price :</p>
                 <p className='value'>{coinData[0].current_price}</p>
            </div>
            <div className='coin-card-elements'> 
                 <p className='name'>24H High :</p>
                 <p className='value'>{coinData[0].high_24h}</p>
            </div>
            <div className='coin-card-elements'> 
                 <p className='name'>24H Low :</p>
                 <p className='value'>{coinData[0].low_24h}</p>
            </div>
            <div className='coin-card-elements'> 
                 <p className='name'>Market Capital :</p>
                 <p className='value'>{coinData[0].market_cap}</p>
            </div>
            <div className='coin-card-elements'> 
                 <p className='name'>Total Volume :</p>
                 <p className='value'>{coinData[0].total_volume}</p>
            </div>
            
           </div>
        )}
        
    </div>
    <div className='buy-sell-buttons'>
       <button className='buy-button'>Buy</button>
       <button className='sell-button'>Sell</button>
    </div>
    <div className='login-signup'>
      <button className='login'>Login</button>
      {/* <p className='distinguish'>OR</p> */}
      <button className='signup'>Create Account</button>
    </div>
    </div>
  )
}

export default CoinCard