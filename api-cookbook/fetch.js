class Fetch {
  constructor() {
    this.authentication = "2f86b8baff844a239c68b13f9fda410b";
    this.numberOfFoods = 30;
  }

  async getFood(inputValue) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.authentication}&query=${inputValue}&number=${this.numberOfFoods}`
    );

    const data = await response.json();
    return data;
  }
}
