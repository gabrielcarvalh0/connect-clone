import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export function BackToTop() {
  return (
    <div  className="w-full bg-blue-800 p-2">
      <a
        className="text-gray-200 hover:text-white flex flex-row items-center justify-center gap-2"
        href="#app"
      >
        Voltar ao top
        <FaAngleUp size={25} />
      </a>
    </div>
  );
}
