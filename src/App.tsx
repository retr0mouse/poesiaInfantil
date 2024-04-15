import './App.css'
import articles from './articles'

function App() {

  return (
    <>
      <header>
        <a href="">Sobre nosotros</a>
        <a href="">Novedades</a>
        <img src="/poesiaInfantil/logo.svg" alt="" />
        <a href="">Leer online</a>
        <a href="">Nuestro blog</a>
      </header>
      <main>
        <div className="articles_container">
          {articles.map((article, index) => {
            return (
              <article key={index}>
                <img src={`/poesiaInfantil/${article.image}`} alt="" />
                <h2>{article.heading}</h2>
                <p>{article.description}</p>
              </article>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default App
