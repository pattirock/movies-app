import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from '../../pages/List';
import Detail from '../../pages/Detail';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/search/:value" render={() => <div>Movies - Search </div>} />
      <Route path="/movie/:id" component={Detail} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
);
