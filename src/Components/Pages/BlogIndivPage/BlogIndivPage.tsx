import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogContent } from "../../Common/API/HTMLAPI";
import DOMPurify from "dompurify";

function BlogIndivPage() {
  const [blogInfo, setBlogInfo] = useState("");

  const { id } = useParams<string>();
  useEffect(() => {
    if (id) {
      fetchBlogData(id);
    }
  }, [id]);
  async function fetchBlogData(passedID: string) {
    try {
      const response = await getBlogContent(passedID);
      const sanitizedHTML = DOMPurify.sanitize(response);
      const styledDOM = applyStyles(sanitizedHTML);
      setBlogInfo(styledDOM);
    } catch (error) {
      console.log(error);
    }
  }
  function applyStyles(str: string) {
    const replacements: { [key: string]: string } = {
      "<hr>": "<hr/>",
      '<code class="language-javascript">':
        '<code class="language-javascript">',
      "<pre>": '<pre class="rounded bg-slate-700 p-3 shadow-inner">',
      "<p>": '<p class="p-5">',
      "<h1>": '<h1 class="font-bold text-xl text-center">',
      "<ol>": '<ol class="p-5">',
      "<a ":
        '<a target="_blank" rel="noreferrer noopener" class="hover:bg-sky-700 hover:uppercase hover:underline" ',
      "<img ": '<img class="text-center"',
      "<h3>": '<h3 class="font-bold text-md text-center">',
      "<li>": '<li class="list-disc justify-self-center">',
    };

    const regex = new RegExp(Object.keys(replacements).join("|"), "g");
    return str.replace(regex, (matched) => replacements[matched]);
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: blogInfo }}
      className="font-mono col-span-4"
    />
  );
}

export default BlogIndivPage;
