import { configureStore } from "@reduxjs/toolkit";
import BoardData from "./BoardData";
export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  reducer: {
    board: BoardData,
    Highlighted: BoardData,
  },
});
