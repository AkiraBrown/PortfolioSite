import { useEffect, useState, FC } from "react";

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
    <main>
      <ul></ul>
    </main>
  );
}

export default BlogsPage;
