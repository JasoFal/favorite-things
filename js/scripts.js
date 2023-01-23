function favoriteThingsBusiness(event) {
  event.preventDefault();
  let favoriteBreakfast = document.querySelector("input[name='breakfast']:checked").value;
  let movieInput = document.querySelector("input[name='movie']:checked").value;
  let langInput = document.querySelector("input[name='lang']:checked").value;
  let sportInput = document.querySelector("input[name='sport']:checked").value;
  let stateInput = document.querySelector("input[name='state']:checked").value;

  const favoriteThingsArray = [favoriteBreakfast, movieInput, langInput, sportInput, stateInput];
  favoriteThingsArray[1];
  favoriteThingsArray[0];
  favoriteThingsArray[2];

  const updatedArray = [];
  updatedArray.push(favoriteThingsArray[1], favoriteThingsArray[0], favoriteThingsArray[2]);
  console.log(updatedArray);

  const favoriteUl = document.createElement("ul");
  favoriteUl.setAttribute("id", "favoriteThings");
  document.querySelector("form").append(favoriteUl);
  const liOne = document.createElement("li");
  const liTwo = document.createElement("li");
  const liThree = document.createElement("li");
  liOne.append(updatedArray[0]);
  liTwo.append(updatedArray[1]);
  liThree.append(updatedArray[2]);
  document.getElementById("favoriteThings").append(liOne, liTwo, liThree);
}

window.addEventListener("load", function() {
  const formInputs = this.document.getElementById("form-inputs");
  formInputs.addEventListener("submit", favoriteThingsBusiness);
});

