import { NavLink } from "react-router-dom";

const Header = () => {
  return <header>
    <div className="mw9 ph5-l ph4-ns ph35 center pt4">
      <div className="flex items-center-ns justify-between-ns flex-row-ns flex-column">
        <span className="logo">Patrick O.</span>
        <ol className="list pa0 ma0 mt0-ns mt4">
          <li className="fl w-auto pl4-ns">
            <NavLink to="/about">About</NavLink>
            </li>
          <li className="fl w-auto pl4 ml3-ns">
            <NavLink to="/work">Work</NavLink>
          </li>
          <li className="fl w-auto pl4 ml3-ns">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ol>
      </div>
    </div>    
  </header>
}

export default Header;