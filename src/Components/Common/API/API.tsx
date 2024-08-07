import Axios from "./Axios";

async function getAllBlogs() {
  try {
    const response = await Axios.get("/blogs");
    return response.data;
  } catch (error) {
    return error;
  }
}

export { getAllBlogs };
