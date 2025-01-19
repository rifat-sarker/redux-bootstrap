import { AddTaskModal } from "@/components/module/Tasks/AddTaskModal";
import TaskCard from "@/components/module/Tasks/TaskCard";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";

import { ITask } from "@/types";

export default function Tasks() {
  const { data, isLoading, isError } = useGetTasksQuery(undefined);
  console.log(data, isLoading, isError);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-5 mt-20">
      <div className="flex justify-end items-center mt-5 gap-4">
        <h1 className="mr-auto">Task</h1>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="low">Low</TabsTrigger>
          </TabsList>
        </Tabs>

        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-20">
        {!isLoading &&
          data.tasks.map((task: ITask) => (
            <TaskCard task={task} key={task.id} />
          ))}
      </div>
    </div>
  );
}
