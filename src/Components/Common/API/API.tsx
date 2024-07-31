/* eslint-disable react-refresh/only-export-components */
import Axios from "./Axios";

async function getAllBlogs() {
  try {
    const response = await Axios.get("/blogs");
    return response.data;
  } catch (error) {
    return error;
  }
}
interface BlogData {
  id: string | number;
  title: string;
  date_uploaded: string;
  file_path: string;
}
async function GetOneBlog(id: string): Promise<BlogData> {
  try {
    const result = await Axios.get(`/blogs/${id}`);
    return result.data as BlogData;
  } catch (error) {
    console.error(error);
    throw new Error("Problem getting data");
  }
}
export { getAllBlogs, GetOneBlog };
