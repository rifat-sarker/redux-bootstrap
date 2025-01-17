import { AddUserModal } from "@/components/module/Users/AddUserModal";
import UserCard from "@/components/module/Users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function User() {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  return (
    <div className="max-w-7xl mx-auto px-5 mt-20">
      <div className="flex justify-end items-center mt-5 gap-4">
        <AddUserModal />
      </div>
      <div className="mt-10 gap-6 grid grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
