function renderPlants(target, plants) {
  console.log("plants", plants);

  if (!plants.length)
    document.querySelector(".no-results").classList.remove("hide");

  const cards = plants.map((plant) => {
    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "card__image");

    const img = document.createElement("img");
    img.setAttribute("src", plant.url);
    imgDiv.append(img);

    const nameDiv = document.createElement("div");
    nameDiv.setAttribute("card", "card__name");

    const name = document.createElement("h3");
    name.innerHTML = plant.name;
    nameDiv.append(name);

    const priceIconDiv = document.createElement("div");
    priceIconDiv.setAttribute("class", "class__price-icon");

    const price = document.createElement("h4");
    price.innerHTML = plant.price;
    price.setAttribute("class", "card__price");

    const iconsDiv = document.createElement("div");
    iconsDiv.setAttribute("class", "card__icons");

    priceIconDiv.append(price);
    priceIconDiv.append(iconsDiv);

    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");
    if (plant.staff_favorite) cardDiv.setAttribute("class", "card__favorite");
    cardDiv.append(imgDiv, nameDiv, priceIconDiv);

    return cardDiv;
  });

  document.querySelector(".no-results").classList.add("hide");

  return cards.map((card) => target.append(card));
}

export default function renderResults() {
  const resultsDiv = document.querySelector("#cards");

  this.state.plants.length ? renderPlants(resultsDiv, this.state.plants) : null;
}
