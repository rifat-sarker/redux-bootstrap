import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitiaState {
  task: ITask[];
}

const initialState : InitiaState = {
  task: [
    {
      id: "dfdf",
      title: "Initialize Frontend",
      description: "Create home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "dfdffsfd",
      title: "Initialize Frontend",
      description: "Create home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
