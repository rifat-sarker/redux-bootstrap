import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitiaState {
  tasks: ITask[];
  filter: "high" | "medium" | "low" | "All";
}

const initialState: InitiaState = {
  tasks: [],
  filter: "All",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<ITask>) {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
