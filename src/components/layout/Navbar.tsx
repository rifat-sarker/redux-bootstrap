import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="max-w-6xl mx-auto py-4 px-6 flex items-center space-x-6">
      <h1 className="font-bold">
        <span className="text-2xl text-pink-500">Task</span>{" "}
        <span className="text-2xl">Mate</span>
      </h1>
      <Link to={"users"}>Go to users</Link>
      <Link to={""}>Go to Task lists</Link>
    </div>
  );
}
