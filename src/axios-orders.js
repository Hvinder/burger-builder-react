import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-2d20a-default-rtdb.firebaseio.com/",
});

export default instance;
