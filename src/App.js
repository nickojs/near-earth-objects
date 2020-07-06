import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Core from './containers/Core/Core';
import Collection from './containers/Collection/Collection';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Core} />
        <Route path="/collection" component={Collection} />
      </Switch>
    </Layout>
  );
}

export default App;
