import { configureStore } from "@reduxjs/toolkit";
import BoardData from "./BoardData";
export default configureStore({
  reducer: {
    board: BoardData,
  },
});
