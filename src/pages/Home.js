import Layout from '../components/Layout/Layout';
import signature from '../svg/signature.svg'
import { Link } from 'react-router-dom';

const Home = () => {
  return <Layout>
    <div className="mw9 ph5-l ph4-ns ph35 center pt6-l pt5">
      <img src={signature} alt="My signature in svg" className="h-auto-ns h25 mb3" />
      <h1 className="mw8 f2-l f3-m f4 lh-copy pr6-l mb5-l mb4">Hi, I’m Patrick Ojeh. I’m a product designer &amp; part-time developer currently based in Lagos Nigeria. I lead product design at Mobnia where i design & code to solve business problems. I have experience in visual design, prototyping, CSS architecture &amp; React.</h1>
      <Link to="/contact" className="f4-ns bb pb1 b--white-20">Contact me</Link>
    </div>
  </Layout>
}

export default Home;