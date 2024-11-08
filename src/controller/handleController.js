import axios from "axios";

export const handleRequest = async (e, username, password) => {
  e.preventDefault();

  const loginData = {
    username: username,
    password: password,
  };

  try {
    const response = await axios.post(
      "http://localhost:4500/api/v1/user/login",
      loginData
    );
    if (response) {
      localStorage.setItem("token", response.data);
    }
    console.log("Login successful", response.data);
  } catch (error) {
    console.error("Error logging in", error);
  }
};
