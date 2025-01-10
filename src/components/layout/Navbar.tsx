import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto py-4 h-16 px-6 flex items-center gap-3">
      <div className="flex items-center">
        <h1 className="font-bold">
          <span className="text-2xl text-pink-500">Task</span>{" "}
          <span className="text-2xl">Mate</span>
        </h1>
      </div>
      <Link to={"users"}>Go to users</Link>
      <Link to={""}>Go to Task lists</Link>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
