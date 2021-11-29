import { Fragment } from 'react';
import Header from './Layout/Header';
import Spinner from 'react-loader-spinner';

const Loader = () => {
  return <Fragment>
    <Header />
    <div className="tc pt5">
      <Spinner type="TailSpin" color="#fff" height={40} width={40} />
    </div>
  </Fragment>
}

export default Loader;