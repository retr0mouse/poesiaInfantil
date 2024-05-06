import { useEffect, useState } from 'react';
import '../App.css';
import articles from '../data/articles';
import posts from '../data/posts';
import { useRef } from 'react';
import Article from '../components/Article';
import { NavLink } from 'react-router-dom';

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const blogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize)

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
        <div className="header_content">
          <NavLink className={({ isActive }) => (isActive ? "active " : "") + "header_link"} to="/about">Sobre nosotros</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active " : "") + "header_link"} to="/news">Novedades</NavLink>
          <NavLink className={"logo_link"} to="/"><img className="logo_btn" src="/poesiaInfantil/logo.svg" alt="" /></NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active " : "") + "header_link"} to="/learn">Leer online</NavLink>
          <button className="header_link" title='to blog' onClick={() => {
            blogRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}>Nuestro blog</button>
          <button onClick={() => setIsMenuOpened(!isMenuOpened)} className='burger_btn'><img className="" src="/poesiaInfantil/burger.svg" alt="" /></button>
          <div className={`menu ${isMenuOpened ? 'opened' : ''}`}>
            <NavLink className={({ isActive }) => isActive ? "active " : "" + "menu_link"} to="/about">Sobre nosotros</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active " : "" + "menu_link"} to="/news">Novedades</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active " : "" + "menu_link"} to="/learn">Leer online</NavLink>
            <button className="menu_link" onClick={() => {
              blogRef.current?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpened(false);
            }}>Nuestro blog</button>
          </div>
        </div>
      </header>
      <main>
        <div className="banner">
          {/* blank space */}
        </div>
        <div className="articles_background">
          <div className="articles_container">
            {articles.map((article, index) => {
              return (
                <Article
                  index={index}
                  video={`/poesiaInfantil/${article.video}`}
                  posterImage={`/poesiaInfantil/${article.image}`}
                  heading={article.heading}
                  description={article.description}
                />
              )
            })}
          </div>
        </div>

        <div ref={blogRef} className="posts_container">
          <h1 className="posts_heading" >NUESTRO BLOG</h1>
          <div className="posts">
            {posts.map((post, index) => {
              return (
                <article key={index}>
                  <img src={`/poesiaInfantil/${post.image}`} alt="" />
                  <div className='post_text'>
                    <h2 className={`${index % 2 ? 'greenHeading' : 'pinkHeading'}`}>{post.heading}</h2>
                    <p>{post.description}</p>
                    <a href="">Leer el artículo<img src="/poesiaInfantil/greenButton.svg" alt="" /></a>
                  </div>
                </article>
              )
            })}
          </div>
          <a className="more_btn" href="" >
            <img src="/poesiaInfantil/greenMoreButton.png" alt="" />
          </a>
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
          <a className="" href="" ><img src="/poesiaInfantil/pinkMoreButton.png" alt="" /></a>
        </div>
      </main >
      <footer>
        <div className="footer_container">
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

          </div>
          <img src="/poesiaInfantil/footerImage.svg" alt="" />
        </div>
        <div className="green_line" />
        <div className="footer_links">
          <p>©2024 poesiainfantil.es</p>
          <a href="">Política de cookies</a>
        </div>
      </footer>
    </>
  )
}

export default App
