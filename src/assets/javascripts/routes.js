import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from '../../pages/List';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/search/:value" render={() => <div>Movies - Search </div>} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
);
