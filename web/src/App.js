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
      <aside></aside>
      <main>

      </main>
    </div>
  

  );
}

export default App;
