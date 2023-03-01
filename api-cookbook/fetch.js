class Fetch {
  constructor() {
    this.authentication = "2f86b8baff844a239c68b13f9fda410b";
    this.numberOfFoods = 20;
  }

  async getFood(inputValue) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.authentication}&query=${inputValue}&number=${this.numberOfFoods}`
    );

    const data = await response.json();
    return data;
  }

  async getDetailOfTheFood(id) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=2f86b8baff844a239c68b13f9fda410b&includeNutrition=false`
    );

    const data = await response.json();
    return data;
  }
}
