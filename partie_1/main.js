const ROOT = document.documentElement;
const RED_BTN = document.getElementById("red_btn");
const GREEN_BTN = document.getElementById("green_btn");
const BLUE_BTN = document.getElementById("blue_btn");
const TOGGLE_BTN = document.getElementById("toggle_btn");
const RAINBOW_BTN = document.getElementById("rainbow_btn");
const BORDER_INPUT = document.getElementById("border_input");
const HELLO_BTN = document.getElementById("hello_btn");
const TEXT_INPUT = document.getElementById("text_input");
const CUSTOM_BTN = document.getElementById("custom_btn");
const EVENT_DIV = document.getElementById("event_div");

let rainbow_color_array = [
  "red",
  "orange",
  "yellow",
  "green",
  "cyan",
  "blue",
  "purple",
];
let i_rainbow = 0;

EVENT_DIV.classList.add("JS_bgc");

RED_BTN.addEventListener("click", (e) => {
  ROOT.style.setProperty("--bgc", "red");
});

GREEN_BTN.addEventListener("click", (e) => {
  ROOT.style.setProperty("--bgc", "green");
});

BLUE_BTN.addEventListener("click", (e) => {
  ROOT.style.setProperty("--bgc", "blue");
});

TOGGLE_BTN.addEventListener("click", (e) => {
  if (ROOT.style.getPropertyValue("--bgc") == "black") {
    ROOT.style.setProperty("--bgc", "white");
    ROOT.style.setProperty("--color", "black");
  } else {
    ROOT.style.setProperty("--bgc", "black");
    ROOT.style.setProperty("--color", "white");
  }
  i_rainbow = 0;
});

RAINBOW_BTN.addEventListener("click", (e) => {
  switch (ROOT.style.getPropertyValue("--bgc")) {
    case "red":
      i_rainbow = 1;
      break;
    case "green":
      i_rainbow = 4;
      break;
    case "blue":
      i_rainbow = 6;
      break;
    case "purple":
      i_rainbow = 0;
      break;
    default:
      break;
  }
  ROOT.style.setProperty("--bgc", rainbow_color_array[i_rainbow]);
  i_rainbow++;
});

BORDER_INPUT.addEventListener("change", (e) => {
  ROOT.style.setProperty("--border_size", BORDER_INPUT.value + "px");
});

HELLO_BTN.addEventListener("click", (e) => {
  EVENT_DIV.textContent += " " + HELLO_BTN.textContent;
});

CUSTOM_BTN.addEventListener("click", (e) => {
  EVENT_DIV.textContent += " " + TEXT_INPUT.value;
  TEXT_INPUT.value = "";
});
