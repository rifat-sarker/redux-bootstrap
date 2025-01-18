import { RootState } from "@/redux/store";
import { IUser } from "@/types";

import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      id: "T_Ki2sTjwgSWm7taWBtMK",
      name: "Jony",
    },
    {
      id: "34",
      name: "Complete project documentation",
    },
  ],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser(state, action: PayloadAction<DraftUser>) {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUsers = (state: RootState) => state.user.users;
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
