import React from "react"
import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import Card from "./component/Card"
import data from "./data"

export default function App() {
   const dataElements = data.map( items => {
     return ( <Card
              key = {items.id}
              {...items}
   />)
   })
  return (
    <div className="App">
        <Navbar />
        <Hero/>
        <section className = "cards-list">
         {dataElements}
        </section>
    </div>
  )
}


