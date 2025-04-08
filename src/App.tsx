
import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

const arrayOfPlanete = [
  {
    name: "Mercure",
    imgSrc: "/planete/mercure.webp"
  },
  {
    name: "Vénus",
    imgSrc: "public/planete/venus.webp"
  },
  {
    name: "Terre",
    imgSrc: "public/planete/terre.jpg"
  },
  {
    name: "Mars",
    imgSrc: "public/planete/mars.webp"
  },
  {
    name: "Jupiter",
    imgSrc: "public/planete/Jupiter.webp"
  },
  {
    name: "Saturne",
    imgSrc: "public/planete/Saturne.avif"
  },
  {
    name: "Uranus",
    imgSrc: "public/planete/uranus.webp"
  },
  {
    name: "Neptune",
    imgSrc: "public/planete/Neptune.webp"
  },
  
]

function App() {

  const [planeteName, setPlaneteName] = useState('');

  const filterPlanete = arrayOfPlanete.filter(item => item.name.toLowerCase().includes(planeteName.toLowerCase()));
  

  return (
    <>
    <main>
    <h1>Les planètes </h1>
    <section className='planete'>
      <input id ="barre" type="text" placeholder='Entrez le nom de la planète'  onChange={(e) => setPlaneteName(e.target.value)} ></input>
    {filterPlanete.map((planete) => {
      
        return (

          <Card name={planete.name} imgSrc={planete.imgSrc} />
        )
      })}
    </section>

    </main>
      
    </>
  )
}

export default App
