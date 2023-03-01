//Init Fetch
const httpFetch = new Fetch();
// Init UI
const ui = new UI();

const searchField = document.querySelector(".foodSearch");
const searchButton = document.querySelector(".searchButton");
// const foodImage = document.querySelector(".food-image");
const foodItem = document.querySelector(".food-item");

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
        ui.showAlert("No food found, please try it again.");
      }
    });
  } else {
    // Display message: "Please enter food you want to search for"
    ui.showAlert("Please enter food you want to search for");
  }
});

// MODAL
// const myModal = new bootstrap.Modal(".modal");

// document.querySelector(".test-button").addEventListener("click", () => {
//   myModal.show();
// });

// document.getElementById("close-button").addEventListener("click", () => {
//   myModal.hide();
// });
