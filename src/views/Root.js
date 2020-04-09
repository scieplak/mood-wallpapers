import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'components/templates/MainTemplate';
import Wallpapers from 'views/Wallpapers';
import Favorites from 'views/Favorites';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={Wallpapers} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
