import { FaArrowUp } from "react-icons/fa";
function ScrollToTop() {
  return (
    <button
      className=" rounded-md bg-teal-500 fixed bottom-10 right-10 shadow-lg p-2"
      onClick={() => window.scroll(0, 0)}
    >
      <FaArrowUp className="size-7" />
    </button>
  );
}

export default ScrollToTop;
