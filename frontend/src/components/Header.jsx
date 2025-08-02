import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../store/features/auth/authSlice";
import MemberHeader from "./member/MemberHeader";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">EVA</Link>
      </div>
      <ul>
        {user ? (
          <MemberHeader />
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login{" "}
              </Link>{" "}
            </li>
            <li>
              <Link to="/register">
                {" "}
                <FaUser />
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
export default Header;
