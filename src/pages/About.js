import Layout from "../components/Layout/Layout";
import portrait from "../images/portrait.png";

const About = () => {
  return <Layout>
    <div className="mw9 ph5-l ph4-ns ph35 center pt5 mt4-l">
      <div className="flex justify-between-ns flex-row-l flex-column">
        <div className="w-60-l w-100-m">
          <h1 className="mw8 f2-l f3-m f4 lh-copy pr6-l mb4-l mb2 mw7-l pr6-l">I’m Patrick Ojeh. I’m a product designer & part-time developer currently based in Lagos Nigeria.</h1>
          <p className="f4-ns lh-copy pt3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusantium minima voluptates unde accusamus necessitatibus autem corrupti illo. Distinctio alias deserunt repudiandae exercitationem. Tempora officia maiores corporis adipisci impedit dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione atque eius ut asperiores consectetur quas est cupiditate amet maxime at saepe, obcaecati dolores! Quibusdam et ratione possimus, voluptate neque quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dignissimos necessitat.</p>
          <p className="f4-ns lh-copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusantium minima voluptates unde accusamus necessitatibus autem corrupti illo. Distinctio alias deserunt repudiandae exercitationem. Tempora officia maiores corporis adipisci impedit dolore. Lorem ipsum dolor, sit amet consectetur.</p>
        </div>
        <div className="w-30-l w-100-m mt0-l mt4 mt5-l">
          <img src={portrait} alt="A photo of me" />
        </div>
      </div>
    </div>
  </Layout>
}

export default About;