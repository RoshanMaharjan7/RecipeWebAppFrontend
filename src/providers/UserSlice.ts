import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { log } from "console";

export interface UserState {
  id: string;
  fullName: string;
  email: string;
  role: string;
  favoriteRecipes: string[];
}
const initialState: UserState = {
  id: "",
  fullName: "",
  email: "",
  role: "",
  favoriteRecipes: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.favoriteRecipes = action.payload.favoriteRecipes;
    },
    logout: (state) => {
        state.id = "";
        state.fullName = "";
        state.email = "";
        state.role = "";
        state.favoriteRecipes = [];
        },
  },
});

// Action creators are generated for each case reducer function
export const { setUser,logout } = userSlice.actions;

export default userSlice.reducer;
