import { AddUserModal } from "@/components/module/Users/AddUserModal";

export default function User() {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-20">
      <div className="flex justify-end items-center mt-5 gap-4">
        <AddUserModal />
      </div>
      <div className="mt-10 gap-6 grid grid-cols-3"></div>
    </div>
  );
}
