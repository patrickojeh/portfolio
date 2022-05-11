import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return <header>
    <div className="mw9 ph5-l ph4-ns ph35 center">
      <div className="flex items-center justify-between flex-row">
        <span className="logo">
          <Link to="/">Patrick O.</Link>
        </span>
        <ol className="list pa0 ma0">
          <li className="fl w-auto pl4-ns pr5-l">
            <a href="mailto:patrickojeh@gmail.com" className="btn">Email</a>
          </li>
        </ol>
      </div>
    </div>
  </header>
}

export default Header;