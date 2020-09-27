import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

//page
const HomePage = lazy(() => import('@/pages/HomePage'));

function App() {
  return (
    <Provider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Route render={({ location }) => {
            const { pathname, key } = location;
            return (
                <Switch location={location}>
                  <Route exact path="/" component={HomePage}/>
                </Switch>
            );
          }} />
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
