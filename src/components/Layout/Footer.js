import { NavLink } from "react-router-dom";
import signature from '../../svg/signature.svg';

const Footer = () => {
  return <footer>
    <div className="mw9 ph5-l ph4-ns ph35 center pt6 pb5-l">
      <div className="flex items-start-l justify-between-l flex-row-l flex-column-l flex-column-reverse pb2">
        <div className="pt0-l pt5 flex flex-column-l flex-row justify-between">
          <div>
            <img src={signature} alt="My signature in svg" className="h-auto-ns h25 mb3" />
          </div>
          <div className="pt3">© Copyright 2021.</div>
        </div>
        <div className="w-30-l w5-m flex justify-between-l flex-row-l flex-column">
          <ol className="list pa0 ma0">
            <li className="">
              <a href="https://github.com/patrickojeh" target="_blank">Github</a>
              </li>
            <li className="mt4">
              <a href="https://instagram.com/patrickojeh" target="_blank">Instagram</a>
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