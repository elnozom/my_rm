import store from "@/store";
import { snackBarModel } from "./snackbar.model";
export const openSnack = (Title: string, Msg: string ,ClassName: string) => {
  store.commit("ui/stopSnack");
  let snack: snackBarModel = {
    Active: true,
    ClassName,
    Title,
    Msg,
  };
  store.commit("ui/setSnack", snack);
  setTimeout(()=>{
    store.commit("ui/stopSnack");
  } , 2000)
};

export const closeSnack = (Title: string, Msg: string) => {
  store.commit("ui/stopSnack");
};
