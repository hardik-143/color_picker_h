import { toast } from "react-hot-toast";

export const updateColorInStorage = (color) => {
  localStorage.setItem("color", JSON.stringify(color));
};
export const recentColorsFromStorage = () => {
    let recent = localStorage.getItem("color");
    if (recent) {
      return JSON.parse(recent);
    }
    return [];
  }

export const setMessage = (msg) => {
  // message.open({ content: msg}, 2);
  toast(msg, {
    duration: 2000,
    className: "custom_toast",
  });
};

export const get3digit = (num) => {
    if (num < 10) {
        return `00${num}`;
    } else if (num < 100) {
        return `0${num}`;
    } else {
        return `${num}`;
    }
}

export const checkPaletteColorsInUrl = () => {
  let url = window.location.href;
  let color = url.split("?palette=")[1];
  if (color) {
    let r = color.substring(0, 3);
    let g = color.substring(3, 6);
    let b = color.substring(6, 9);
    let newurl = url.split("?")[0];
    window.history.pushState({}, null, newurl);
    return { red: r, green: g, blue: b };
  } else {
    return { red: 222, green: 215, blue: 34 };
  }
};

export const randomColorValue = () => {
    return Math.floor(Math.random() * 256);
    };