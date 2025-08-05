import { useDispatch } from "react-redux";
import { deleteMember } from "../../store/features/members/memberSlice";
function MemberItem({ member }) {
  const dispatch = useDispatch();
  return (
    <div className="member">
      <div>{new Date(member.createdAt).toLocaleString("en-US")}</div>
      <p>{member.firstName}</p>
      <button onClick={dispatch(deleteMember(member._id))} className="close">
        {" "}
        X
      </button>
    </div>
  );
}

export default MemberItem;
