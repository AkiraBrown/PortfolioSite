import { useEffect } from "react";

// import { getAllBlogs } from "../../Common/API/API";
import { getBlogContent } from "../../Common/API/HTMLAPI";
function BlogsPage() {
  // const [blogsArr, setBlogsArr] = useState([]);
  // useEffect(() => {
  //   GetAllBlogPost();
  // }, []);
  // async function GetAllBlogPost() {
  //   try {
  //     const response = await getAllBlogs();
  //     console.log(response);
  //     setBlogsArr(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  useEffect(() => {
    GetHTMLContent();
  }, []);

  async function GetHTMLContent() {
    try {
      const response = await getBlogContent("1");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return <main></main>;
}

export default BlogsPage;
