let result = document.getElementById("screen");

let buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);

    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      result.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      result.value = screenValue;
    } else if (buttonText == "=") {
      result.value = eval(screenValue);
    } else if (buttonText == "DEL") {
      result.value = screenValue.slice(-1,1);
    } else {
      screenValue += buttonText;
      result.value = screenValue;
    }
  });
}
