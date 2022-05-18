import { NavLink } from "react-router-dom";
import signature from '../../svg/signature.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer className="footer pr5-lx">
    <div className="mw9 ph5-l ph4-ns ph35 center pt5 pb5-l">
      <div className="flex items-end-l justify-between-l flex-row-l flex-column-l flex-column-reverse pb2">
        <div className="pt0-l pt5 flex flex-column-l flex-row justify-between">
          <span className="copyright dn dib-l">&copy;</span>
          <p className="small pb4 pb0-ns mb0-ns"><span className="di-m dn-l">©</span> Copyright {year}</p>
        </div>
        <div className="w-30-l w5-m flex justify-between-l flex-row-l flex-column">
          <ol className="list pa0 ma0">
            <li className="">
              <a href="https://github.com/patrickojeh" target="_blank">Github</a>
              </li>
            <li className="mt4">
              <a href="https://linkedin.com/in/patrickojeh" target="_blank">LinkedIn</a>
            </li>
            <li className="mt4">
              <a href="https://twitter.com/patrickojeh" target="_blank">Twitter</a>
            </li>
          </ol>
          <ol className="list pa0 ma0 mt0-l mt4">
            <li className="">
              <a href="tel:+2348038392060">(+234) 80 3839 2060</a>
              </li>
            <li className="mt4">
              <a href="mailto:hi@patrickojeh.com">hi@patrickojeh.com</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer;