import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllBlogs } from "../../Common/API/API";

function BlogsPage() {
  const [allBlogs, setAllBlogs] = useState([]);
  useEffect(() => {
    fetchAllBlogs();
  }, []);

  async function fetchAllBlogs() {
    try {
      const response = await getAllBlogs();
      setAllBlogs(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="col-span-4 font-mono min-h-screen mt-3">
      <h1 className="font-bold text-center text-xl">Blogs</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 overflow-auto">
        {allBlogs.map(({ title, date_uploaded, id }, idx) => {
          return (
            <li
              key={id || idx}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden text-center p-2"
            >
              <p className="p-6 font-bold text-lg">{title}</p>
              <p className="mt-2 text-gray-400">{date_uploaded}</p>
              <NavLink to={`/blogs/${id}`}>Read</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BlogsPage;
