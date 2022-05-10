import config from "./config";
import axios from "axios";


const addUser = async (data) => {
  // console.log("saveing ", meeting);
  // const header = makeHeader();
  // const user = getLoggedInUser();
  // console.log(appConfig.conditions);
  console.log('config url', config.register)

  try {
      return await axios.post('http://localhost:1337/api/auth/local/register', data).then((response) => {
          // console.log('New Meeting', response.data);
          return response.data;
      });
  } catch (error) {
      throw new Error(error);
  }
};

export {addUser}