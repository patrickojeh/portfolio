import { Fragment, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import CaseStudy from './pages/CaseStudy';
import NotFound from './pages/NotFound';
import 'tachyons';
import './App.css';
const About = lazy(() => import('./pages/About'));

function App() {
  return <Fragment>
    <Suspense fallback="<h1>pls wait</h1>">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/cs/:project" exact>
          <CaseStudy />
        </Route>      
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  </Fragment>
}

export default App;
