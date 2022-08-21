import { GetterTree } from "vuex";
import { UserState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<UserState, RootState> = {
  loading(state): boolean {
    return state.loading;
  },
  email(state): Object {
    return state.email;
  },
  loggedIn(state): Object {
    return state.email != "";
  },

};
