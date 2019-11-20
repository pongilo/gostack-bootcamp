import React from 'react';
// BrowserRouter: permite navegar entre as paginas da web
// Switch: Garante que uma pagina seja exibida a cada rota
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository'

export default function Routes() {
  // O path procura a rota que começa com o caracter /, entao para fazer uma comparação de igualdade precisa ser colocado o exact
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}