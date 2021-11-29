import Layout from "../components/Layout/Layout";

const Prowork = () => {
  return <Layout>
    <div className="mw9 ph5-l ph4-ns ph35 center pt5 mt4-l">
      <div className="w-100">
        <h1 className="mw8 f2-l f3-m f4 lh-copy pr6-l mb4-l mb2 mw7-l pr6-l">Prowork</h1>
      </div>
      <div className="flex justify-between-ns flex-row-l flex-column">     
        <div className="w-30-l w-60-m">
          <div className="flex justify-between-ns flex-row">
            <div className="w-50 w-auto-ns">
              <p className="f4-ns lh-copy pt3">Dev.</p>
              <p className="f4-ns lh-copy pt3">2012 — 15</p>
            </div>
            <div>
              <p className="f4-ns lh-copy pt3">X</p>
              <p className="f4-ns lh-copy pt3">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <div className="w-50-l w-100-m">
          <p className="f4-ns lh-copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusantium minima voluptates unde accusamus necessitatibus autem corrupti illo. Distinctio alias deserunt repudiandae exercitationem. Tempora officia maiores corporis adipisci impedit dolore. Lorem ipsum dolor, sit amet consectetur.</p>
        </div>
      </div>
    </div>
  </Layout>
}

export default Prowork;