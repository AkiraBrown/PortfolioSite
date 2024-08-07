import Axios from "./AxiosHTML";

async function getBlogContent(id: string) {
  try {
    const response = await Axios.get(`/blogs/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export { getBlogContent };
