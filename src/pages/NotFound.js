import Layout from "../components/Layout/Layout";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return <Layout>
    <div className="mw7 ph5-l ph4-ns ph35 center pt6-l pt5 pb5-l pb4">
      <h1 className="mw8 pr6-l mb3-l mb4">
        404 : Page Not Found
      </h1>
      <p className="mb5-l">The page you tried to access cannot be found. You should try going home or contact me instead.</p>
      <Link to="/contact" className="bb pb1 b--white-20">Contact me</Link>
    </div>
  </Layout>
}

export default NotFound;