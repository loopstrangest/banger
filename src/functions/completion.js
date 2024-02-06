/** @format */

import { newProcess } from "../functions/process";

export const setComplete = (level) => {
  const newProcessValue = newProcess(level.toString());
  localStorage.setItem("banger_mlc", newProcessValue);
};

export const getComplete = () => {
  const newProcessValue = localStorage.getItem("banger_mlc") || 0;
  for (let i = 0; i <= 16; i++) {
    if (newProcess(i.toString()) === newProcessValue) {
      return i;
    }
  }
  return 0;
};
