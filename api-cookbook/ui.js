// Init Fetch
const httpFetch2 = new Fetch();

class UI {
  constructor() {
    this.foodContent = document.querySelector(".food-content");

    this.foodContent.addEventListener("click", (e) => {
      const foodItem = e.target.closest(".food-item");
      if (foodItem) {
        console.log("cllic", foodItem.id);
        const id = foodItem.id;
        httpFetch2.getDetailOfTheFood(id).then((data) => {
          console.log(data);
        });
      }
    });
  }

  // Create element
  displayFood(data) {
    let output = "";

    data.results.forEach((result) => {
      output += `
    <div class="food-item" id="${result.id}">
          <a href="#">
            <img
              src="${result.image}"
              class="food-image"
              width="200"
              height="200"
          /></a>
          <p class="food-label">${result.title}</p>
    </div>
    `;
    });
    this.foodContent.innerHTML = output;
  }

  insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }

  showAlert(message) {
    const div = document.createElement("div");
    this.clearAlert();
    div.className = "alert-div";

    div.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol
        id="exclamation-triangle-fill"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </symbol>
    </svg>

    <div class="alert alert-warning d-flex align-items-center" role="alert">
      <svg
        class="bi flex-shrink-0 me-2"
        width="24"
        height="24"
        role="img"
        aria-label="Warning:"
      >
        <use xlink:href="#exclamation-triangle-fill" />
      </svg>
      <div>${message}</div>
    </div>
    `;

    const afterElement = document.querySelector(".food-content");
    this.insertAfter(div, afterElement);

    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const alert = document.querySelector(".alert-div");

    if (alert) {
      alert.remove();
    }
  }
}
