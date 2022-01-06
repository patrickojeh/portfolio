import Layout from '../components/Layout/Layout';
import signature from '../svg/signature.svg'
import { Link } from 'react-router-dom';
import proworkCoverImage from '../images/projects/prowork/cover.svg';
import proworkCoverImageMobile from '../images/projects/prowork/cover.png';
import todoCoverImage from '../images/projects/todo/cover.svg';
import ussdCoverImage from '../images/projects/ussd/cover.png';

const Home = () => {
  return <Layout>
    <div className="mw9 ph5-l ph4-ns ph35 center pt6-l pt5">
      <img src={signature} alt="My signature in svg" className="h-auto-ns h25 mb3" />
      <h1 className="mw8 f2-l f3-m f4 lh-copy pr6-l mb5-l mb4">Hi, I’m Patrick Ojeh. I’m a product designer &amp; part-time developer currently based in Lagos Nigeria. I lead product design at Mobnia where i design & code to solve business problems. I have experience in visual design, prototyping, CSS architecture &amp; React.</h1>
      <Link to="/about" className="f4-ns bb pb1 b--white-20">About me</Link>
      <div className="project-grid mt6-l mt5">
          <div className="project-grid__item">
            <div className="bg-near-black h5-l h4-ns h5 br2 mb4-ns mb3">
              <Link to="/cs/prowork">
                <img src={proworkCoverImage} alt="Project cover" className="h-100 w-100 db-ns dn" />
                <img src={proworkCoverImageMobile} alt="Project cover" className="h-100 w-100 dn-ns db" />
              </Link>
            </div>
            <Link to="/cs/prowork">
              <b className="f4-ns lh-copy fw5">Prowork</b>
            </Link>
            <p className="f4-ns lh-copy mt1">Case Study</p>
          </div>
          <div className="project-grid__item">
            <div className="bg-near-black h5-l h4-ns h5 br2 mb4-ns mb3">
              <Link to="/cs/casia">
                {/* <img src="" alt="r" className="h-100 w-100" /> */}
              </Link>
            </div>
            <b className="f4-ns lh-copy fw5">-</b>
            <p className="f4-ns lh-copy mt1">Case Study</p>
          </div>
          <div className="project-grid__item">
            <div className="bg-near-black h5-l h4-ns h5 br2 mb4-ns mb3">
              <Link to="/cs/casia">
                {/* <img src="" alt="r" className="h-100 w-100" /> */}
              </Link>
            </div>
            <b className="f4-ns lh-copy fw5">-</b>
            <p className="f4-ns lh-copy mt1">Case Study</p>
          </div>
          <div className="project-grid__item">
            <div className="bg-near-black h5-l h4-ns h5 br2 mb4-ns mb3">
              <a href="https://todo.patrickojeh.com" target="_blank">
                <img src={todoCoverImage} alt="Project cover" className="h-100 w-100" />
              </a>
            </div>
            <a href="https://todo.patrickojeh.com" target="_blank">
              <b className="f4-ns lh-copy fw5">Todo</b>
            </a>
            <p className="f4-ns lh-copy mt1">Side Project</p>
          </div>
          <div className="project-grid__item">
            <div className="bg-near-black h5-l h4-ns h5 br2 mb4-ns mb3">
              <a href="https://ussd.patrickojeh.com" target="_blank">
                <img src={ussdCoverImage} alt="Project cover" className="h-100 w-100" />
              </a>
            </div>
            <a href="https://ussd.patrickojeh.com" target="_blank">
              <b className="f4-ns lh-copy fw5">USSD</b>
            </a>
            <p className="f4-ns lh-copy mt1">Side Project</p>
          </div>
          <div className="project-grid__item">
            <div className="bg-near-black h5-l h4-ns h5 br2 mb4-ns mb3">
              <Link to="/cs/casia">
                {/* <img src="" alt="r" className="h-100 w-100" /> */}
              </Link>
            </div>
            <b className="f4-ns lh-copy fw5">-</b>
            <p className="f4-ns lh-copy mt1">Side Project</p>
          </div>
        </div>
    </div>
  </Layout>
}

export default Home;