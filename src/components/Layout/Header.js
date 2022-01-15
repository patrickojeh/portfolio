import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return <header>
    <div className="mw9 ph5-l ph4-ns ph35 center pt4">
      <div className="flex items-center-ns justify-between flex-row">
        <span className="logo">
          <Link to="/">Patrick O.</Link>
        </span>
        <ol className="list pa0 ma0 mt0-ns mt4">
          <li className="fl w-auto pl4-ns">
            <a href="mailto:patrickojeh@gmail.com">📨 &nbsp; Email</a>
          </li>
        </ol>
      </div>
    </div>
  </header>
}

export default Header;