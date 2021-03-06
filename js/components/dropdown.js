/* Apply behavior to all dropdown's in the page */
export default function dropdown(observer) {
  const OPEN_STATE_CLASS = "dropdown--open";

  const dropdownHtmlCollection = document.getElementsByClassName("dropdown");

  for (const dropdownComponent of dropdownHtmlCollection) {
    const dropdownComponentList = dropdownComponent.getElementsByClassName(
      "dropdown-list__item"
    );

    const dropdownComponentSelect = dropdownComponent.querySelector(
      ".dropdown-select"
    );

    const dropdownComponentSelected = dropdownComponent.querySelector(
      ".dropdown-select__selected"
    );

    dropdownComponentSelect.addEventListener("click", () => {
      dropdownComponent.classList.toggle(OPEN_STATE_CLASS);
    });

    for (const item of dropdownComponentList) {
      item.addEventListener("click", (e) => {
        dropdownComponentSelected.innerHTML = e.target.innerHTML;
        dropdownComponent.classList.toggle(OPEN_STATE_CLASS);

        const key = e.target.getAttribute("data-list-key");
        const value = e.target.getAttribute("data-list-value");
        observer.notify([key, value]);
      });
    }
  }
}
