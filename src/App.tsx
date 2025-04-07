
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


  return (
    <>
    <main>
    <h1>Les planètes</h1>
    <section className='planete'>
    {arrayOfPlanete.map((element) => {
        return (
          <Card name={element.name} imgSrc={element.imgSrc} />
        )
      })}
    </section>

    </main>
      
    </>
  )
}

export default App
