import { Fragment, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'tachyons';
import './App.css';
import Loader from './components/Loader';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return <Fragment>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  </Fragment>
}

export default App;
