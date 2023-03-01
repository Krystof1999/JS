//Init Fetch
const httpFetch = new Fetch();
// Init UI
const ui = new UI();

const searchField = document.querySelector(".foodSearch");
const searchButton = document.querySelector(".searchButton");
const foodImage = document.querySelector(".food-image");

let inputValue;

searchButton.addEventListener("click", (e) => {
  console.log("ds");
  inputValue = searchField.value;

  if (inputValue !== "") {
    httpFetch.getFood(inputValue).then((data) => {
      if (data.results.length > 0) {
        console.log(data);
        ui.displayFood(data);
      } else {
        // Display message: "No food found, please try it again."
        console.log("zero");
      }
    });
  } else {
    // Display message: "Please enter food you want to search for"
    console.log("empty");
  }
});
