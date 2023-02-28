//Init Fetch
const httpFetch = new Fetch();
// Init UI
const ui = new UI();

// search input
const searchField = document.querySelector(".foodSearch");
const searchButton = document.querySelector(".searchButton");

let inputValue;

searchButton.addEventListener("click", () => {
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
    }); // url + pasta...
  } else {
    // Display message: "Please enter food you want to search for"
    console.log("empty");
  }
});
