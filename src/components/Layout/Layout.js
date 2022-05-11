import { Fragment, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const content = props.children;
  const pageHeight = window.innerHeight;
  const pageWidth = window.innerWidth;

  const shineRefA = useRef();
  const shineRefB = useRef();

  useEffect(() => {
    const c = window.setInterval(() => {
      const randomHeightA = Math.round(Math.random() * pageHeight);
      const randomWidthA = Math.round(Math.random() * pageWidth);
      const randomHeightB = Math.round(Math.random() * pageHeight);
      const randomWidthB = Math.round(Math.random() * pageWidth);

      shineRefA.current.style.top = `${randomHeightA}px`;
      shineRefA.current.style.left = `${randomWidthA}px`;
      shineRefB.current.style.top = `${randomHeightB}px`;
      shineRefB.current.style.right = `${randomWidthB}px`;
    }, 7000);
    return () => {
      window.clearInterval(c);
    }
  }, [])
  return <Fragment>
    {
      props.shine &&
      <div className="shine-container">
        <div className="shine" ref={shineRefA}></div>
        <div className="shine shine--right" ref={shineRefB}></div>
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