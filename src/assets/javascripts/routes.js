import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <div>Movies - List </div>} />
      <Route path="/search/:value" render={() => <div>Movies - Search </div>} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
);
