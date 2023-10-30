import { FiSun } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineStar } from "react-icons/hi2";

export const NAV_LINKS = [
  {
    id: 1,
    title: "Tasks",
    path: "/",
    icon: <GrHomeRounded fontSize={20} />,
  },
  {
    id: 2,
    title: "My Day",
    path: "/myday",
    icon: <FiSun fontSize={20} />,
  },
  {
    id: 3,
    title: "Important",
    path: "/important",
    icon: <HiOutlineStar fontSize={20} />,
  },
];
