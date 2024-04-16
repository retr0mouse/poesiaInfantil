import { useEffect, useState } from 'react';
import './App.css';
import articles from './data/articles';
import posts from './data/posts';
import { useRef } from 'react';

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const blogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 768) {
      setIsMenuOpened(false);
    }
  }, [windowWidth]);

  return (
    <>
      <header>
        <a className="header_link" href="">Sobre nosotros</a>
        <a className="header_link" href="">Novedades</a>
        <a href="/"><img className="logo_btn" src="/poesiaInfantil/logo.svg" alt="" /></a>
        <a className="header_link" href="">Leer online</a>
        <button className="header_link" title='to blog' onClick={() => {
          blogRef.current?.scrollIntoView({ behavior: 'smooth' });
        }}>Nuestro blog</button>
        <button onClick={() => setIsMenuOpened(!isMenuOpened)} className='burger_btn'><img className="" src="/poesiaInfantil/burger.svg" alt="" /></button>
        <div className={`menu ${isMenuOpened ? 'opened' : ''}`}>
          <a className="menu_link" href="">Sobre nosotros</a>
          <a className="menu_link" href="">Novedades</a>
          <a className="menu_link" href="">Leer online</a>
          <button className="menu_link" onClick={() => {
            blogRef.current?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpened(false);
          }}>Nuestro blog</button>
        </div>
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
        <div ref={blogRef} className="posts_container">
          <img className="posts_heading" src="/poesiaInfantil/postsHeading.svg" alt="" />
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
      <footer>
        <div className="footer_content">
          <h1>ME INTERESA LA POESÍA INFANTIL</h1>
          <p>Suscríbete para recibir la información más reciente e importantes de poesiainfantil.es, desde novedades hasta ofertas especiales, lanzamientos exclusivos, eventos y más.</p>
          <div className="email_input">
            <input type="email" name="email" id="email" placeholder='Dirección de correo electrónico' />
            <button>ME SUSCRIBO</button>
          </div>
          <div className="terms_container">
            <label>
              <input type="checkbox" name="terms" id="terms" />
              <span className="checkmark"></span>
              Acepto la <b>Política de privacidad</b> poesiainfantil.es
            </label>
          </div>
          <div className="green_line" />
          <div className="footer_links">
            <a href="">Política</a>
            <p>©2024 poesiainfantil.es</p>
            <a href="">Política de cookies</a>
          </div>
        </div>
        <img src="/poesiaInfantil/footerImage.svg" alt="" />
      </footer>
    </>
  )
}

export default App
