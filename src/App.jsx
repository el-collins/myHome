import { useState } from 'react'
import { HOMES } from "../src/assets/data/homes";
import Card from './components/Card/Card'
import Header from '../src/components/header/index'
import { BottomNav } from './components/Auth/BottomNav';

function App() {
  const [newHome, setNewHome] = useState(HOMES)
  const [location, setLocation] = useState(false)
  const [cheapest, setCheapest] = useState(false)
  const [mobileFilter, setMobileFilter] = useState(false)

  const searchLocation = () =>{
    setLocation(!location)
    setCheapest(false)
    setNewHome(HOMES)
  }

  const searchCheapest = () =>{
    const prices = HOMES.filter(x => x.value.amount !== null)
    prices.sort((a, b) => a.value.amount - b.value.amount)
    const sorted = [...prices] 
    setCheapest(prev => !prev)
    setLocation(false)
    setNewHome(cheapest? HOMES :sorted )

  }

  const uniqueLocations = [...new Set(HOMES.map((items)=>items.value.LGA))]

  const filterSearch = (LGA)=>{
    const filteredSearch = HOMES.filter((items)=> items.value.LGA === LGA)
    setNewHome(filteredSearch)
    setLocation(!location)
  }
  const filterSearchMobile = (LGA)=>{
    const filteredSearch = HOMES.filter((items)=> items.value.LGA === LGA)
    setNewHome(filteredSearch)
  }
  const toggleMobileFilter = ()=>{
    setMobileFilter(!mobileFilter)
  } 

  return (
    <div>
      <Header searchLocation={searchLocation} location={location} uniqueLocations={uniqueLocations} cheapest={cheapest} searchCheapest={searchCheapest} filterSearch={filterSearch} setNewHome={setNewHome} setLocation={setLocation} toggleMobileFilter={toggleMobileFilter} mobileFilter={mobileFilter} filterSearchMobile={filterSearchMobile}/>
      <div className='pt-8 pb-16'>

      <Card  setNewHome={setNewHome} newHome={newHome} cheapest={cheapest} searchCheapest={searchCheapest}/>
      </div>
      <BottomNav/>
    </div>
  )
}

export default App