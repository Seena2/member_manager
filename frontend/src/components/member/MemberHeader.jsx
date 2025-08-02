import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function MemberHeader() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">EVA</Link>
      </div>
      <ul>
        <li>
          <Link to="/Fee"> Membership Fee </Link>
        </li>
        <li>
          <Link to="/benefit">Benefits</Link>
        </li>
        <li>
          <Link to="/faq">FAQs</Link>
        </li>
        <li>
          <Link to="/faq">
            <button>1 new notification</button>
          </Link>
        </li>
        <li>
          <Link to="/faq">image_icon</Link>
        </li>
      </ul>
    </header>
  );
}
export default MemberHeader;
