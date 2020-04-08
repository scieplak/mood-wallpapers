import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate';
import Wallpapers from 'views/Wallpapers';
import Search from 'views/Search';
import Favorites from 'views/Favorites';

function App() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Wallpapers} />
          <Route path="/search" component={Search} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;
