import { Button } from "@/components/ui/button";
import { deleteUser } from "@/redux/features/user/userSlice";
import { IUser } from "@/types";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

interface IProps {
  user: IUser;
}
const UserCard = ({ user }: IProps) => {
  const dispatch = useDispatch();

  return (
    <div className="border px-5 py-3 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="">
          <h1>{user.name}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button onClick={() => dispatch(deleteUser(user.id))}>
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
