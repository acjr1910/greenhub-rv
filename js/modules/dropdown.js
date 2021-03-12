const removeClassAttribute = (elem) => elem.removeAttribute("class");

/**
 * Dropdown Behavior
 */
export default function dropdown() {
  const dropdownElements = document.getElementsByClassName("dropdown");

  Array.from(dropdownElements).forEach((dropdown, index) => {
    const rootSelectElement = dropdown.getElementsByTagName("select")[0];

    /* Dropdown Root Element */
    const rootDropdownDiv = document.createElement("div");
    rootDropdownDiv.setAttribute("class", "dropdown ");

    /* Dropdown Selected Value Div */
    const selectedOptionDiv = document.createElement("div");
    selectedOptionDiv.setAttribute(
      "class",
      "dropdown__selected select-selected"
    );
    selectedOptionDiv.innerHTML =
      rootSelectElement.options[rootSelectElement.selectedIndex].innerHTML;

    /* Dropdown Options Div */
    const dropdownListDiv = document.createElement("div");
    dropdownListDiv.setAttribute(
      "class",
      "dropdown__options dropdown--select-hide select-items select-hide"
    );

    /* Create each dropdown option, except the first one */
    Array.from(rootSelectElement).forEach((option, optionIndex) => {
      if (optionIndex !== 0) {
        const optionListDiv = document.createElement("div");
        optionListDiv.innerHTML =
          rootSelectElement.options[optionIndex].innerHTML;

        /* Listen for click to check which option was selected by the user  */
        optionListDiv.addEventListener("click", (e) => {
          const selectElement = e.target.parentNode.parentNode.parentNode.getElementsByTagName(
            "select"
          )[0];
          const dropdownSelectedValueDiv = e.target.parentNode.previousSibling;

          /* Clear old value */
          Array.from(selectElement).forEach(
            (selectOption, selectOptionIndex) => {
              if (
                selectElement.options[selectOptionIndex].innerHTML ==
                e.target.innerHTML
              ) {
                /* Remove selected class from other options */
                const oldSelected = e.target.parentNode.getElementsByClassName(
                  "same-as-selected"
                );
                Array.from(oldSelected).forEach(removeClassAttribute);

                /* Change selected value */
                selectedOptionDiv.innerHTML = e.target.innerHTML;

                /* Set selected option state class */
                e.target.classList.add("dropdown__option--selected");
                e.target.classList.add("same-as-selected");
              }
            }
          );
          dropdownSelectedValueDiv.click();
        });

        /* Append option list into option list div */
        dropdownListDiv.appendChild(optionListDiv);

        /* Append selected option iinto dropdown root element */
        rootDropdownDiv.appendChild(selectedOptionDiv);

        /* Append option list div into dropdown root element */
        rootDropdownDiv.appendChild(dropdownListDiv);

        /* Append created dropdown into origin div */
        dropdown.appendChild(rootDropdownDiv);
      }
    });

    selectedOptionDiv.addEventListener("click", (e) => {
      e.stopPropagation();
      // close all opened
      e.target.nextSibling.classList.toggle("select-hide");
      e.target.nextSibling.classList.toggle("dropdown--select-hide");
      e.target.classList.toggle("dropdown--arrow-active");
    });
  });
}
