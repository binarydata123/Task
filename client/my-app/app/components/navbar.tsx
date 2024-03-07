import Link from 'next/link';
import "./style.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
       
        <ul className="nav-links">
          <li className="nav-item">
            <Link href="/admin">
             Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/user">
              User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
