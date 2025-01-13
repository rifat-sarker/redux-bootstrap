import { AddTaskModal } from "@/components/module/Tasks/AddTaskModal";
import TaskCard from "@/components/module/Tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Task() {
  const tasks = useAppSelector(selectTasks);

  return (
    <div className="max-w-7xl mx-auto px-5 mt-20">
      <div className="flex justify-between items-center mt-5">
        <h1>Task</h1>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-20">
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
}
