import axios from "axios";

export const getAllUsers = async (limit, page) => {
  try {
    let token = localStorage.getItem("token");
    if (!token) throw new Error("Unauthorized error");

    let response = await axios.get("http://localhost:4500/api/v1/user", {
      headers: {
        auth: `Bearer ${token}`,
      },
      params: {
        limit: limit,
        page: page,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
