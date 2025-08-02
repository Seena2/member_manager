import axios from "axios";
//http requests
const API_URL = "/api/users";
//Register User
const register = async (userData) => {
  //store the response  in the variable
  const response = await axios.post(API_URL, userData);
  //check if there is data in the response(note, axios store the response in an object called 'data')
  if (response.data) {
    //parse the data to string and set it on localStorage, b/c localStorage only accept strings
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
//export
const authService = { register };
export default authService;
