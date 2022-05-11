import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const content = props.children;
  return <Fragment>
    {
      props.shine &&
      <div className="shine-container">
        <div className="shine"></div>
        <div className="shine shine--right"></div>
      </div>
    }
    <Header />
      <main>
        { content }
      </main>
    <Footer />
  </Fragment>
}

export default Layout;