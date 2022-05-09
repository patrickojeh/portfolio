import Layout from "../components/Layout/Layout";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return <Layout>
    <div className="mw7 ph5-l ph4-ns ph35 center pt6-l pt5 pb5-l pb4 tc">
      <h1 className="mw8">
        Page Not Found
      </h1>
      <p className="mb5-l">Sorry, the page you're looking for couldn't be found.</p>
      <Link to="/" className="btn">Go home</Link>
    </div>
  </Layout>
}

export default NotFound;