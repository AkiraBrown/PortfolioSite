import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetOneBlog } from "../../Common/API/API.tsx";
// interface BlogInfo {
//   id: number | string;
//   title: string;
//   date_uploaded: string;
//   file_path: string;
// }

function BlogIndivPage() {
  const [blogInfo, setBlogInfo] = useState({
    id: "0",
    title: "",
    date_uploaded: "",
    file_path: "",
  });
  interface BlogData {
    id: string | number;
    title: string;
    date_uploaded: string;
    file_path: string;
  }
  const { id } = useParams<string>();
  useEffect(() => {
    if (id) {
      fetchBlogData(id);
    }
  }, [id]);
  async function fetchBlogData(passedID: string) {
    try {
      const response = (await GetOneBlog(passedID)) as BlogData;
      setBlogInfo(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <p>{blogInfo?.title}</p>
    </div>
  );
}

export default BlogIndivPage;
