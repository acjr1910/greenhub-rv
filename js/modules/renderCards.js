function renderPlants(target, plants) {
  console.log("plants", plants);

  const cards = plants.map((plant) => {
    const img = document.createElement("img");
    img.setAttribute("src", plant.url);
    img.setAttribute("class", "card_image");

    const name = document.createElement("h3");
    name.innerHTML = plant.name;
    name.setAttribute("card", "card__name");

    const price = document.createElement("h4");
    price.innerHTML = plant.price;
    price.setAttribute("class", "card__price");

    const iconsDiv = document.createElement("div");
    iconsDiv.setAttribute("class", "card__icons");

    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");
    if (plant.staff_favorite) cardDiv.setAttribute("class", "card__favorite");
    cardDiv.append(img, name, price, iconsDiv);

    return cardDiv;
  });

  cards.map((card) => target.append(card));
}

export default function renderResults() {
  const resultsDiv = document.querySelector("#results");

  this.state.plants.length ? renderPlants(resultsDiv, this.state.plants) : null;
}
