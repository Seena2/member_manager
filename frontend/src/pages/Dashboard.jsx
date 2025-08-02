import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
      <h1>Dashboard</h1>
    </div>
  );
}
export default Dashboard;
