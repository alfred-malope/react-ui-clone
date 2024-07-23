import './App.css'
import NavBar from './assets/Components/NavBar'
import Section from './assets/Components/Section'
import Article from './assets/Components/Article'
import Cards from './assets/Components/Cards'

function App() {

  return (
    <div className='wrapper'>
      <header>
        <NavBar/>
      </header>
      <div className="container">
      <section>
        <Section/>
      </section>
      <article>
        <Article />
      </article>
      <cards>
        <Cards />
      </cards>
      </div>
    </div>
  )
}

export default App
