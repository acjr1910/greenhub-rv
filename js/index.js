import { Observer } from "./entities/Observer";
import { ObservableState } from "./entities/ObservableState";

import requestData from "./modules/requestData";
import renderResults from "./modules/renderCards";

import dropdown from "./components/dropdown";
import button from "./components/button";

export default function app() {
  /* Setup app initial state */
  const appState = new ObservableState({
    sun: null,
    water: null,
    pets: null,
    plants: [],
  });

  /* Subscribe appState fn's */
  appState.subscribe(requestData);
  appState.subscribe(renderResults);

  /* Subscribe dropdowns fn's */
  const dropdownObserver = new Observer();
  dropdownObserver.subscribe((selectValue) => {
    const [key, value] = selectValue;
    appState.set({
      ...appState.state,
      [key]: value,
    });
  });

  /* Add components behavior */
  dropdown(dropdownObserver);
  button();
}

document.addEventListener("DOMContentLoaded", app);
