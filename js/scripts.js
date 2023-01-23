function favoriteThings(event) {
  event.preventDefault();
  let favoriteBreakfast = document.querySelector("input[name='breakfast']:checked").value;
  let movieInput = document.querySelector("input[name='movie']:checked").value;
  let langInput = document.querySelector("input[name='lang']:checked").value;
  let sportInput = document.querySelector("input[name='sport']:checked").value;
  let stateInput = document.querySelector("input[name='state']:checked").value;

  const favoriteThingsArray = [favoriteBreakfast, movieInput, langInput, sportInput, stateInput];
  console.log(favoriteThingsArray);
  console.log(favoriteThingsArray[0]);
  console.log(favoriteThingsArray[1]);
  console.log(favoriteThingsArray[2]);

  
}

window.addEventListener("load", function() {
  const formInputs = this.document.getElementById("form-inputs");
  formInputs.addEventListener("submit", favoriteThings);
});

