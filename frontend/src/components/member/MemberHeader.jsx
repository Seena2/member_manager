import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../store/features/auth/authSlice";

function MemberHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <>
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
        <Link to="/notification">
          <button>1 new notification</button>
        </Link>
      </li>
      <li>
        <Link to="/profile">image_icon</Link>
      </li>
      <li>
        <button className="btn" onClick={onLogout}>
          <FaSignOutAlt>logout</FaSignOutAlt>
        </button>
      </li>
    </>
  );
}
export default MemberHeader;
