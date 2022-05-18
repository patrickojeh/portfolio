import Layout from '../components/Layout/Layout';
import signature from '../svg/signature.svg'
import { Link } from 'react-router-dom';
import proworkCoverImage from '../images/projects/prowork/cover.svg';
import proworkCoverImageMobile from '../images/projects/prowork/cover.png';
import todoCoverImage from '../images/projects/todo/cover.svg';
import ussdCoverImage from '../images/projects/ussd/cover.png';
import whiteArrow from '../images/white-arrow.svg';

const Home = () => {
  return <Layout shine="true">
    <div className="mw9 ph5-l ph4-ns ph35 center pt6-l pt5">
      <img src={signature} alt="My signature in svg" className="signature h25 mb3" />
      <h1 className="mw8 pr6-l mb5-l mb4">Hi, I am Patrick Ojeh. I’m a product designer based in Lagos, Nigeria. <span>I most recently worked in design and development agency, solving challenging problems through thoughtful human-centered designs for small startups and large organizations.</span></h1>
      <div className="flex flex-column flex-row-l justify-between">
        <div className="w-50-l">
          <p>I have an intense attention to craft and focus on driving impact through a great product. My solutions are backed by a combination of user research, accessibility, and usability techniques.</p>
          <p>In my spare time, you'd find me learning something new, playing video games, or working on a personal project.</p>
        </div>
        <div className="w-40-l">
          {/* <a href="/resume.pdf" className="resume-link flex justify-between" target="_blank">
            <span>My resume</span>
            &rarr;
          </a> */}
        </div>
      </div>
      {/* <Link to="/work" className="sideNav dn flex-l">
          <span>Work</span>
          <img src={whiteArrow} />
      </Link> */}
    </div>
  </Layout>
}

export default Home;