import axios from "axios";
const API_URL = "/api/members/";

//Create new member
const createMember = async (memberData, token) => {
  const config = {
    //create header to be sent along request, and we placed 'Bearer ' before token
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, memberData, config);
  //note axios store its response on an object called 'data'
  return response.data;
};
//Get the member data, only takes token b/c we are fetching not sending
const getMember = async (token) => {
  const config = {
    //create header to be sent along request, and we placed 'Bearer ' before token
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  //note axios store its response on an object called 'data'
  return response.data;
};

//Delete member
const deleteMember = async (memberId, token) => {
  const config = {
    //create header to be sent along request, and we placed 'Bearer ' before token
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + memberId, config);
  //note axios store its response on an object called 'data'
  return response.data;
};

const memberService = { createMember, getMember, deleteMember };
export default memberService;
