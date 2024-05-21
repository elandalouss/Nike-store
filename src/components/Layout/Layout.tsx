import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import Liked from "../../assets/Liked.png";
import Sac from "../../assets/Pannier.png";
import Profile from "../../assets/Profile.png";

const Layout = () => {
  return (
    <div className="Layout">
      <nav>
        <div>
          <Link to="/">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="96px"
              height="96px"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="links">  
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li> 
            <li>
              <Link to="/Contact">Contact</Link>
            </li> 
          </ul>
        </div>
        <div className="Icons">
        <Link to="/Pannier">
          <img src={Sac} alt="" />
        </Link>
        <Link to="/Liked">
          <img src={Liked} alt="" />
        </Link>
          <img src={Profile} alt="" />
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
