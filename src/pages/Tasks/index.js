import React, { useReducer } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlinePlus } from "react-icons/hi2";
import { SlOptions } from "react-icons/sl";
import { Link } from "react-router-dom";

const ACTIONS = {
  Task_Added: "add-task",
  Task_Completed: "complete-task",
  Task_Deleted: "delete_task",
};

function taskReducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.Task_Added:
      return [...state, { task: payload, isCompleted: false }];
      break;
    default:
      break;
  }
}

function Tasks() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // dispatch task into reducer
      dispatch({ type: ACTIONS.Task_Added, payload: e.target.value });
    }
  };
  return (
    <div className="flex flex-col max-[299px]:px-2 max-md:px-2 max-lg:px-2 h-screen pt-3">
      <header className="flex items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <span>
            <GrHomeRounded fontSize={25} />
          </span>
          <h1 className="text-3xl font-medium pl-3">Tasks</h1>
        </div>
        <div>
          <details className="dropdown dropdown-end">
            <summary className="m-1 btn">
              <SlOptions fontSize={18} />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded w-[350px] h-[350px] max-[399px]:w-[300px] max-[299px]:w-[250px]">
              <li>
                <Link to="#">Item 1</Link>
              </li>
              <li>
                <Link to="#">Item 2</Link>
              </li>
            </ul>
          </details>
        </div>
      </header>
      <section className="flex-1">
        <div>
          {tasks.map((task) => {
            return task ? (
              <div
                className="w-[1024px] h-[57px] my-3 bg-white rounded-[5px] shadow flex items-center justify-between max-lg:w-[799px] max-[799px]:w-[650px] max-[599px]:w-[450px] max-[699px]:w-[550px] max-[499px]:w-[320px] max-[299px]:w-[250px]"
                key={task.task}
              >
                {task.task}
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </section>
      <section className="w-[1024px] my-3 max-lg:w-[799px] max-[799px]:w-[650px] max-[599px]:w-[450px] max-[699px]:w-[550px] max-[499px]:w-[320px] max-[299px]:w-[250px]">
        <label className="input-group">
          <span>
            <HiOutlinePlus fontSize={23} />
          </span>
          <input
            type="text"
            onKeyDown={handleKeyDown}
            placeholder="Try typing 'Push project code to repo'"
            className="input input-bordered w-full"
          />
        </label>
      </section>
    </div>
  );
}

export default Tasks;
