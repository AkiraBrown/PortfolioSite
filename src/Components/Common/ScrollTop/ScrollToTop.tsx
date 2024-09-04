import { FaArrowUp } from "react-icons/fa";
function ScrollToTop() {
  return (
    <button
      className=" rounded-md bg-teal-500 fixed bottom-10 right-10 shadow-lg p-2"
      onClick={() =>
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      <FaArrowUp className="size-7" />
    </button>
  );
}

export default ScrollToTop;
