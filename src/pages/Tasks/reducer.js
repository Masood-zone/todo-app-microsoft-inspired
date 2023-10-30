import uuid from "react-uuid";
import { ACTIONS } from "./index";
export default function taskReducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.Task_Added:
      return [...state, { id: uuid(), task: payload, isCompleted: false }];
    case ACTIONS.Task_Deleted:
      return state.filter((task) => task.id !== payload);
    case ACTIONS.Task_Completed:
      return state.map((task) =>
        task.id === payload ? { ...task, isCompleted: !task.isCompleted } : task
      );
    default:
      break;
  }
}
