class UI {
  constructor() {
    this.foodContent = document.querySelector(".food-content");
  }

  // Create element
  displayFood(data) {
    let output = "";

    data.results.forEach((result) => {
      output += `
    <div class="food-item">
          <a href="index2.html">
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
}
