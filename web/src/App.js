import React, {useState, useEffect} from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente: Bloco isolado de HTML, CSS E JS,
// não interfere no restante da apli (função que retorna algum conteudo)
// Estado: Info mantida pelo componente (imutabilidade)
// Propriedade: Informações que um componente pai passa para o componente filho

function App() {
  const [github_usarname, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

    useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )

  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_usarname">Usuário do Github</label>
            <input 
              name="github_usarname" 
              id="github_usarname" 
              required 
              value={github_usarname}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required 
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input 
              type="number" 
              name="latitude" 
              id="latitude" 
              required 
              value={latitude} 
              onChange={e => setLatitude(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input 
              type="number" 
              name="longitude" 
              id="longitude" 
              required 
              value={longitude} 
              onChange={e => setLongitude(e.target.value)}
            />
          </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/61742539?s=460&u=43a673266e3aee63c46ff1f35a8add0f7ce38602&v=4" alt="Sara Alcaras"/>
              <div className="user-info">
                <strong>Sara Alcaras</strong>
                <span>JavaScript, ReactJS, NodeJs</span>
              </div>
            </header>
            <p>Apaixonada por tecnologia </p>
            <a href="https://github.com/Sara-Alcaras">Acessar perfil no GitHub</a>
          </li>


          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/61742539?s=460&u=43a673266e3aee63c46ff1f35a8add0f7ce38602&v=4" alt="Sara Alcaras"/>
              <div className="user-info">
                <strong>Sara Alcaras</strong>
                <span>JavaScript, ReactJS, NodeJs</span>
              </div>
            </header>
            <p>Apaixonada por tecnologia </p>
            <a href="https://github.com/Sara-Alcaras">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/61742539?s=460&u=43a673266e3aee63c46ff1f35a8add0f7ce38602&v=4" alt="Sara Alcaras"/>
              <div className="user-info">
                <strong>Sara Alcaras</strong>
                <span>JavaScript, ReactJS, NodeJs</span>
              </div>
            </header>
            <p>Apaixonada por tecnologia </p>
            <a href="https://github.com/Sara-Alcaras">Acessar perfil no GitHub</a>
          </li>


          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/61742539?s=460&u=43a673266e3aee63c46ff1f35a8add0f7ce38602&v=4" alt="Sara Alcaras"/>
              <div className="user-info">
                <strong>Sara Alcaras</strong>
                <span>JavaScript, ReactJS, NodeJs</span>
              </div>
            </header>
            <p>Apaixonada por tecnologia </p>
            <a href="https://github.com/Sara-Alcaras">Acessar perfil no GitHub</a>
          </li>

        </ul>

      </main>
    </div>
  

  );
}

export default App;
