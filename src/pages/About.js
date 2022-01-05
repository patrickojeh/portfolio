import Layout from "../components/Layout/Layout";
import portrait from "../images/portrait.png";

const About = () => {
  return <Layout>
    <div className="mw9 ph5-l ph4-ns ph35 center pt4 pt5-l mt4-l mt3">
      <div className="flex justify-between-ns flex-row-l flex-column">
        <div className="w-60-l w-100-m">
          <h1 className="mw8 f2-l f3-m f4 lh-copy pr6-l mb4-l mb2 mw7-l pr6-l">I’m Patrick Ojeh. I’m a product designer &amp; front-end developer currently based in Lagos Nigeria.</h1>
          <p className="f4-ns lh-copy pt3">By day, i work as lead product designer at Mobnia &mdash; a creative product development agency &mdash; where i use tools/technologies like Figma, Sketch, CSS Architecture, Javascript, Sass to solve business problems and create products that are both functional &amp; visually appealing.</p>
          <p className="f4-ns lh-copy">In my spare time, you'd fine me learning something new, playing video games or working on a personal project.</p>
          <p className="f4-ns lh-copy">Feel free to get in touch. I'd be happy to hear from you!</p>
        </div>
        <div className="w-30-l w-60-m mt0-l mt4 mt5-l">
          <img src={portrait} alt="A photo of me" />
        </div>
      </div>
    </div>
  </Layout>
}

export default About;