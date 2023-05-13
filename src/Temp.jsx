/*eslint-disable*/

import { useMemo } from "react";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

const Temp = ({ state }) => {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );
};
