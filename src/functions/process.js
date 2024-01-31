/** @format */

export const process = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  console.log(hash.toString());
  return hash.toString();
};

export const newProcess = (str) => {
  const string = "newProcessString";
  let hash = 5381;
  const combinedStr = str + string + str + string + str;

  for (let i = 0; i < combinedStr.length; i++) {
    const char = combinedStr.charCodeAt(i);
    hash = ((hash << 5) + hash) ^ char;
    hash = hash & hash;
  }
  return (hash >>> 0).toString(36);
};
