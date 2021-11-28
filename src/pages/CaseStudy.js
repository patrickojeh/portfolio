import { Fragment } from "react";
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Prowork from './Prowork';
import Casia from './Casia';
import NotFound from "./NotFound";

const CaseStudy = () => {
  const routeMatch = useRouteMatch();
  const pathname = routeMatch.url.split('/')[1];

  return <Fragment>
    <Switch>
      <Route path={`/${pathname}/prowork`} exact>
        <Prowork />
      </Route>
      <Route path={`/${pathname}/casia`} exact>
        <Casia />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Fragment>
}

export default CaseStudy;