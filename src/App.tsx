import './App.css'
import articles from './data/articles'
import posts from './data/posts'

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
                <a href=""><img src="/poesiaInfantil/greenButton.svg" alt="" /></a>
              </article>
            )
          })}
        </div>
        <div className="posts_container">
          <img src="/poesiaInfantil/postsHeading.svg" alt="" />
          <div className="posts">
            {posts.map((post, index) => {
              return (
                <article key={index}>
                  <img src={`/poesiaInfantil/${post.image}`} alt="" />
                  <h2 className={`${index % 2 ? 'greenHeading' : 'pinkHeading'}`}>{post.heading}</h2>
                  <p>{post.description}</p>
                  <a href="">Leer el artículo<img src="/poesiaInfantil/greenButton.svg" alt="" /></a>
                </article>
              )
            })}
          </div>
          <a className="more_btn" href="" ><img src="/poesiaInfantil/greenMoreButton.svg" alt="" /></a>
        </div>
        <div className="videos_container">
          <div className="video">
            <div className="video-wrapper">
              <img src="/poesiaInfantil/videoOne.png" alt="" />
              <div className="video_background" />
              <img src="/poesiaInfantil/playButton.svg" alt="Play video" className="play-button" />
            </div>
            <div className="text_container">
              <h2>Risas en verso: poemas divertidos para leer con niños</h2>
              <p>La poesía desafía la mente de los niños al requerirles que recuerden patrones rítmicos y estructuras líricas, fortaleciendo así su capacidad para retener información de manera efectiva.</p>
            </div>
          </div>
          <div className="video">
            <div className="video-wrapper">
              <img src="/poesiaInfantil/videoTwo.png" alt="" />
              <div className="video_background" />
              <img src="/poesiaInfantil/playButton.svg" alt="Play video" className="play-button" />
            </div>
            <div className="text_container">
              <h2>Risas en verso: poemas divertidos para leer con niños</h2>
              <p>La poesía desafía la mente de los niños al requerirles que recuerden patrones rítmicos y estructuras líricas, fortaleciendo así su capacidad para retener información de manera efectiva.</p>
            </div>
          </div>
      </div>
    </main >
    </>
  )
}

export default App
