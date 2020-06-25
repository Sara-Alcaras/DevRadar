import React from 'react';

import './global.css';
import './App.css';

// Componente: Bloco isolado de HTML, CSS E JS,
// não interfere no restante da apli (função que retorna algum conteudo)
// Estado: Info mantida pelo componente (imutabilidade)
// Propriedade: Informações que um componente pai passa para o componente filho

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_usarname">Usuário do Github</label>
            <input name="github_usarname" id="github_usarname" required />
          </div>


          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" id="latitude" required />
          </div>

          <div class="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input name="longitude" id="longitude" required />
          </div>
          </div>

          <button type="submit">Salvar</button>


        </form>
      </aside>
      <main>

      </main>
    </div>
  

  );
}

export default App;
