import { useState } from 'react'
import { HOMES } from "../src/assets/data/homes";
import Card from './components/Card/Card'
import Header from '../src/components/header/index'
import Wishlist from './components/wishlist'; // Correct import with uppercase
import PostYourHouse from './components/PostYourHouse';



function App() {
  const [newHome, setNewHome] = useState(HOMES)
  const [location, setLocation] = useState(false)
  const [cheapest, setCheapest] = useState(false)
  const [showWishlist, setShowWishlist] =useState(false);

  const searchLocation = () =>{
    setLocation(!location)
    setCheapest(false)
  }

  const searchCheapest = () =>{
    const prices = newHome.filter(x => x.value.amount !== null)
    prices.sort((a, b) => a.value.amount - b.value.amount)
    const sorted = [...prices] 
    console.log(sorted)
    setCheapest(prev => !prev)
    setLocation(false)
    setNewHome(cheapest? HOMES :sorted )

    console.log(prices);
  }

  const uniqueLocations = [...new Set(HOMES.map((items)=>items.value.LGA))]

  const filterSearch = (LGA)=>{
    const filteredSearch = HOMES.filter((items)=> items.value.LGA === LGA)
    setNewHome(filteredSearch)
    setLocation(!location)

  }

  return (
    <div className='cards-flex'>
      <Header searchLocation={searchLocation} location={location} uniqueLocations={uniqueLocations} cheapest={cheapest} searchCheapest={searchCheapest} filterSearch={filterSearch} setNewHome={setNewHome} setLocation={setLocation}/>
      <Card setNewHome={setNewHome} newHome={newHome} cheapest={cheapest} searchCheapest={searchCheapest}/>
      {/* <Wishlist/> */}
      {/* <PostYourHouse /> */}
      
       
    </div>
  )
}

export default App
