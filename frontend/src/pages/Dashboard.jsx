import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MemberRegistration from "./MemberRegistration";

function Dashboard() {
  const navigate = useNavigate();
  //get the user
  const { user } = useSelector((state) => state.auth);
  //check if user is logged, if not redirect user to login page
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <div>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Members Dashboard</p>
      </section>
      <MemberRegistration />
    </div>
  );
}
export default Dashboard;
