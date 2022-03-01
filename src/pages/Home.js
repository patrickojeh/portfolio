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
      <h1 className="mw8 f2-l f3-m f4 lh-copy pr6-l mb5-l mb4">Hi, I’m Patrick Ojeh. I’m a product designer &amp; front-end developer currently based in Lagos Nigeria. I lead product design at Mobnia where i design to solve business problems. I have experience in visual design, prototyping, CSS architecture &amp; front-end development.</h1>
      <div className="flex flex-column flex-row-l justify-between">
        <div className="w-50-l">
          <p className="lh-copy f4-ns">By day, i work as lead product designer at Mobnia — a creative product development agency — where i use tools/technologies like Figma, Sketch, CSS Architecture, Javascript, Sass to solve business problems and create products that are both functional &amp; visually appealing.</p>
          <p className="lh-copy f4-ns">In my spare time, you'd fine me learning something new, playing video games or working on a personal project.</p>
        </div>
        <div className="w-40-l">
          <a href="/resume.pdf" className="resume-link flex justify-between" target="_blank">
            <span>My resume</span>
            &rarr;
          </a>
        </div>
      </div>
    </div>
  </Layout>
}

export default Home;