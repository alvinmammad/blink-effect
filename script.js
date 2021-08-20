const colorsArray = ["Red", "Green", "Yellow" , "Black" , "Pink" ];
const selectFrom = document.getElementById("colorInput");

for (color of colorsArray) {
  const selecOption = document.createElement("OPTION");
  selecOption.value = color;
  selecOption.text = color;
  selectFrom.append(selecOption);
}

function changeColor(e) {
  const changableColorDiv =
    document.getElementsByClassName("changableColorDiv");
  changableColorDiv[0].style.background = e.target.value;
  setInterval(() => {
    changableColorDiv[0].style.background = "transparent";
  }, 250);
  setInterval(() => {
    changableColorDiv[0].style.background = e.target.value;
  }, 500);
}
selectFrom.addEventListener("change", changeColor );
