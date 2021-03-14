const API_ENDPOINT = "https://front-br-challenges.web.app/api/v2/green-thumb/";

let isRequestingData = false;

function prepare() {
  document.querySelector(".results").classList.remove("show");
  document.querySelector(".loader").classList.add("loader--show");
  document.querySelector(".no-results").classList.add("no-results--hide");
}

function cleanup() {
  document.querySelector(".loader").classList.remove("loader--show");
  document.querySelector(".results").classList.add("show");
}

export default function requestData() {
  const hasChangedState =
    JSON.stringify(this.prevState) !== JSON.stringify(this.state);

  const hasAllFiltersSet = Object.values(this.state).every((entry) => entry);

  if (hasChangedState && hasAllFiltersSet && !isRequestingData) {
    isRequestingData = true;

    const queryParams = `?sun=${this.state.sun}&water=${this.state.water}&pets=${this.state.pets}`;

    prepare();

    fetch(`${API_ENDPOINT}${queryParams}`)
      .then((res) => res.json())
      .then((data) => {
        this.set({
          ...this.state,
          plants: data,
        });

        isRequestingData = false;

        cleanup();
      })
      .catch((e) => {
        this.set({
          ...this.state,
          plants: [],
        });
      });
  }
}
