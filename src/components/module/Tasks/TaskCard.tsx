import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

import { ITask } from "@/types";
import { Trash2 } from "lucide-react";


interface IProps {
  task: ITask;
}
const TaskCard = ({ task }: IProps) => {


  return (
    <div className="border px-5 py-3 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-lg", {
              "bg-green-500": task.priority === "low",
              "bg-orange-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div>
          <h1 className={cn({ "line-through": task.isCompleted })}>
            {task.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button>
            <Trash2 />
          </Button>
          <Checkbox checked={task.isCompleted} />
        </div>
      </div>

      <p className="mt-5">{task.description}</p>
    </div>
  );
};

export default TaskCard;
