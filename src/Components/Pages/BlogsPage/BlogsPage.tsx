import { useEffect, useState } from "react";
import { getAllBlogs } from "../../Common/API/API";
function BlogsPage() {
  const [blogsArr, setBlogsArr] = useState([]);
  useEffect(() => {
    GetAllBlogPost();
  }, []);
  async function GetAllBlogPost() {
    try {
      const response = await getAllBlogs();
      console.log(response);
      setBlogsArr(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="px-3 mt-5">
      <ul></ul>
    </main>
  );
}

export default BlogsPage;
