import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const content = props.children;
  return <Fragment>
    <Header />
      <main>
        { content }
      </main>
    <Footer />
  </Fragment>
}

export default Layout;