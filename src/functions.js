const randomColorValue = () => {
  return Math.floor(Math.random() * 256);
};
const getrecent = () => {
    let recent = localStorage.getItem("color");
    if (recent) {
      return JSON.parse(recent);
    }
    return [];
  };
  const convert = (clr) => {
    let hex = clr.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
export {randomColorValue,getrecent,convert};