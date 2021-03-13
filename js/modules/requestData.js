const API_ENDPOINT = "https://front-br-challenges.web.app/api/v2/green-thumb/";

let isRequestingData = false;

export default function requestData() {
  const hasChangedState =
    JSON.stringify(this.prevState) !== JSON.stringify(this.state);

  const hasAllFiltersSet = Object.values(this.state).every((entry) => entry);

  if (hasChangedState && hasAllFiltersSet && !isRequestingData) {
    isRequestingData = true;

    const queryParams = `?sun=${this.state.sun}&water=${this.state.water}&pets=${this.state.pets}`;

    // 1 - Set Loading

    fetch(`${API_ENDPOINT}${queryParams}`)
      .then((res) => res.json())
      .then((data) => {
        this.set({
          ...this.state,
          plants: data,
        });
        isRequestingData = false;
        // 2 - Remove Loading
      })
      .catch(() => {
        this.set({
          ...this.state,
          plants: data,
        });
      });
  }
}
