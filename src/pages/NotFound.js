import Layout from "../components/Layout/Layout";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return <Layout>
    <div className="mw7 ph5-l ph4-ns ph35 center pt6-l pt5 pb6-l pb4">
      <h1 className="mw8 f2-l f3-m f4 lh-copy pr6-l mb3-l mb4">
        404 : Page Not Found
      </h1>
      <p className="f4-ns lh-copy mb5-l">The page you tried to access cannot be found. Maybe try going home or contact me instead.</p>
      <Link to="/contact" className="f4-ns bb pb1 b--white-20">Contact me</Link>
    </div>
  </Layout>
}

export default NotFound;